import lyftApi from "./lyft"

const carriers = { lyft: "lyft" }

const google = global.google

const getBoundaries = ({ amount, geoLocation, carrier, rideType = "lyft" }) => {
  const stdDev = 2
  const defaultRadiusInMeters = 32000
  let directions = []

  for (let i = 0; i < 360; i += 45) {
    directions.push(i)
  }

  const rideEstimates = []
  directions.forEach(direction => {
    const googleGeometry = google.maps.geometry.spherical
    const start = new google.maps.LatLng(geoLocation.location)
    const end = googleGeometry.computeOffset(
      start,
      defaultRadiusInMeters,
      direction
    )

    let api = lyftApi
    switch (carrier) {
      case carriers.lyft:
        api = lyftApi
        break
      default:
        api = null
    }
    rideEstimates.push(
      api.getRideEstimate(start, end, amount, stdDev, direction, rideType)
    )
  })
  return Promise.all(rideEstimates).then(results => results)
}

export default {
  getBoundaries
}
