const google = global.google

const getLocation = () =>
  new Promise((success, reject) => {
    const successCallback = position => {
      const geoLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      success(geoLocation)
    }
    const errorCallback = error => {
      reject(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 10000,
      enableHighAccuracy: true
    })
  })

const getAddress = geoLocation => {
  if (!(geoLocation.hasOwnProperty("lat") && geoLocation.hasOwnProperty("lng"))) {
    throw "Invalid Geolocation"
  }

  return new Promise((success, reject) => {
    const callback = (results, status) => {
      status === "OK" ? success(results[0].formatted_address) : reject(status)
    }

    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ location: geoLocation }, callback)
  })
}

const getRecalculatedBoundaries = ({ location, boundaries, map }) => {
  const currentPos = new google.maps.LatLng(location)
  const boundariesArray = []
  const recalculatedBoundaries = []

  for (let i = 0; i < boundaries.length; i++) {
    boundariesArray.push(boundaries[i])
  }

  boundaries.forEach((boundary, index) => {
    let direction = (360 / boundaries.length) * index
    recalculatedBoundaries.push(recalculateBoundary(currentPos, boundary, map, direction))
  })

  return Promise.all(recalculatedBoundaries).then(results => results)
}

const recalculateBoundary = async (position, boundary, map, direction) => {
  let result = await landOrWater(boundary, map)
  if (result === "land") {
    return Promise.resolve(boundary)
  }

  const googleGeometry = google.maps.geometry.spherical
  const midPoint = googleGeometry.computeDistanceBetween(boundary, position) / 2

  if (midPoint <= 250) {
    return Promise.resolve(boundary)
  }

  const midLatLng = new googleGeometry.computeOffset(position, midPoint, direction)

  result = await landOrWater(midLatLng, map)
  if (result === "water") recalculateBoundary(position, midLatLng, map, direction)
  else recalculateBoundary(midLatLng, boundary, map, direction)

  return Promise.resolve()
}

const landOrWater = (position, map) =>
  new Promise(resolve => {
    const staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?"
    const mapOptions = [
      `center=${position.lat()},${position.lng()}`,
      `zoom=${map.getZoom()}`,
      `key=${process.env.GOOGLE_API_KEY}`,
      "size=1x1",
      "maptype=roadmap"
    ].join("&")

    const canvas = document.createElement("canvas")

    const image = new Image()
    image.crossOrigin = "Anonymous"
    image.src = `${staticMapUrl}${mapOptions}`
    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height
      canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height)
      const pixelData = canvas.getContext("2d").getImageData(0, 0, 1, 1).data

      if (pixelData[0] > 160 && pixelData[0] < 181 && pixelData[1] > 190 && pixelData[1] < 210) {
        return resolve("water")
      }
      return resolve("land")
    }
  })

const api = {
  getLocation,
  getAddress,
  getRecalculatedBoundaries
}

export default api
