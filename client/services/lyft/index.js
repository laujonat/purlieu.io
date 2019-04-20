import axios from "axios"

const google = global.google

const getRideEstimate = async (start, end, amount, stdDev, direction, rideType) => {
  const result = await axios.get("/rideEstimate", {
    params: {
      start_lat: start.lat(),
      start_lng: start.lng(),
      end_lat: end.lat(),
      end_lng: end.lng(),
      ride_type: rideType
    }
  })

  if (result.data) {
    let primetimeString = result.data.cost_estimates[0].primetime_percentage
    let primetimePercentage = parseFloat(primetimeString) / 100.0
    let baseCost = result.data.cost_estimates[0].estimated_cost_cents_max / 100
    let estimate = primetimePercentage * baseCost + baseCost

    if (result.data.cost_estimates[0].can_request_ride) {
      if ((estimate < amount + stdDev && estimate > amount - stdDev) || history.length > 8) {
        return Promise.resolve(end)
      } else {
        let ratio = amount / estimate
        const googleGeometry = google.maps.geometry.spherical
        const newDistance = googleGeometry.computeDistanceBetween(start, end)
        const newEnd = new googleGeometry.computeOffset(start, ratio * newDistance, direction)
        return getRideEstimate(start, newEnd, amount, stdDev, direction, rideType)
      }
    } else {
      const googleGeometry = google.maps.geometry.spherical
      const newDistance = googleGeometry.computeDistanceBetween(start, end) / 2
      const newEnd = new googleGeometry.computeOffset(start, newDistance, direction)
      return getRideEstimate(start, newEnd, amount, stdDev, direction, rideType)
    }
  }
}

const api = {
  getRideEstimate
}

export default api
