export const RECEIVE_CLIENT_LOCATION = "RECEIVE_CLIENT_LOCATION"
export const RECEIVE_CLIENT_LOCATION_SUCCESS = "RECEIVE_CLIENT_LOCATION_SUCCESS"
export const RECEIVE_CLIENT_LOCATION_ERROR = "RECEIVE_CLIENT_LOCATION_ERROR"

export const RECEIVE_MARKER_LOCATION = "RECEIVE_MARKER_LOCATION"
export const RECEIVE_MARKER_LOCATION_SUCCESS = "RECEIVE_MARKER_LOCATION_SUCCESS"
export const RECEIVE_MARKER_LOCATION_ERROR = "RECEIVE_MARKER_LOCATION_ERROR"

export const DRAW_POLYGON = "DRAW_POLYGON"
export const DRAW_POLYGON_SUCCESS = "DRAW_POLYGON_SUCCESS"
export const DRAW_POLYGON_ERROR = "DRAW_POLYGON_ERROR"

// Map geoLocation
export const receiveClientLocation = () => ({
  type: RECEIVE_CLIENT_LOCATION
})

export const receiveClientLocationSuccess = data => ({
  type: RECEIVE_CLIENT_LOCATION_SUCCESS,
  data
})

export const receiveClientLocationErrors = data => ({
  type: RECEIVE_CLIENT_LOCATION_ERROR,
  data
})

// Markers
export const receiveMarkerLocation = data => ({
  type: RECEIVE_MARKER_LOCATION,
  data
})

export const receiveMarkerLocationSuccess = data => ({
  type: RECEIVE_MARKER_LOCATION_SUCCESS,
  data
})

export const receiveMarkerLocationError = data => ({
  type: RECEIVE_MARKER_LOCATION_ERROR,
  data
})

// Polygon
export const receiveDrawPolygon = data => ({
  type: DRAW_POLYGON,
  data
})

export const receiveDrawPolygonSuccess = data => ({
  type: DRAW_POLYGON_SUCCESS,
  data
})

export const receiveDrawPolygonError = data => ({
  type: DRAW_POLYGON_ERROR,
  data
})
