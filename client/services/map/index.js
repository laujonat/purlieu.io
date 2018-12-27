const getLocation = () =>
  new Promise((success, reject) => {
    const successCallback = position => {
      const parsedLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      success(parsedLocation)
    }

    const errorCallback = error => {
      reject(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 10000,
      enableHighAccuracy: true
    })
  })

const getAddress = geoLocation =>
  new Promise(success => {
    const successCallback = (results, status) => {
      if (status === "OK") {
        success(results[0].formatted_address)
      }
    }

    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ location: geoLocation }, successCallback)
  })

const api = {
  getLocation,
  getAddress
}

export default api
