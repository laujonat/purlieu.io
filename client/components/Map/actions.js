export const RECEIVE_CLIENT_LOCATION = "RECEIVE_CLIENT_LOCATION"
export const RECEIVE_CLIENT_LOCATION_SUCCESS = "RECEIVE_CLIENT_LOCATION_SUCCESS"
export const RECEIVE_CLIENT_LOCATION_ERROR = "RECEIVE_CLIENT_LOCATION_ERROR"

export const RECEIVE_MARKER_LOCATION = "RECEIVE_MARKER_LOCATION"
export const RECEIVE_MARKER_LOCATION_SUCCESS = "RECEIVE_MARKER_LOCATION_SUCCESS"
export const RECEIVE_MARKER_LOCATION_ERROR = "RECEIVE_MARKER_LOCATION_ERROR"

// fetching
export const NEW_LOCATION = "NEW_LOCATION"
export const FETCH_LOCATION = "FETCH_LOCATION"

export const fetchLocation = () => ({
  type: FETCH_LOCATION
})

// Map geoLocation
export const receiveClientLocationSuccess = data => ({
  type: RECEIVE_CLIENT_LOCATION_SUCCESS,
  data
})

export const receiveClientLocationErrors = errors => ({
  type: RECEIVE_CLIENT_LOCATION_ERROR,
  errors
})

export const receiveClientLocation = data => ({
  type: RECEIVE_CLIENT_LOCATION,
  data
})

export const receiveMarkerLocationError = errors => ({
  type: RECEIVE_MARKER_LOCATION_ERROR,
  errors
})

// Markers
export const receiveMarkerLocationSuccess = data => ({
  type: RECEIVE_MARKER_LOCATION_SUCCESS,
  data
})

export const receiveMarkerLocation = data => ({
  type: RECEIVE_MARKER_LOCATION,
  data
})
