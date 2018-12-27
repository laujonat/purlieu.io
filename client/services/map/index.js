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

const api = {
  getLocation
}

export default api
