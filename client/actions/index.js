export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES"
export const RECEIVE_BOUNDARIES_SUCCESS = "RECEIVE_BOUNDARIES_SUCCESS"
export const RECEIVE_BOUNDARIES_ERROR = "RECEIVE_BOUNDARIES_ERROR"

export const RECEIVE_CLIENT_LOCATION = "RECEIVE_CLIENT_LOCATION"
export const RECEIVE_CLIENT_LOCATION_SUCCESS = "RECEIVE_CLIENT_LOCATION_SUCCESS"
export const RECEIVE_CLIENT_LOCATION_ERROR = "RECEIVE_CLIENT_LOCATION_ERROR"

export const RECEIVE_MARKER_LOCATION = "RECEIVE_MARKER_LOCATION"
export const RECEIVE_MARKER_LOCATION_SUCCESS = "RECEIVE_MARKER_LOCATION_SUCCESS"
export const RECEIVE_MARKER_LOCATION_ERROR = "RECEIVE_MARKER_LOCATION_ERROR"

export const DRAW_BOUNDARIES_POLYGON = "DRAW_BOUNDARIES_POLYGON"
export const DRAW_BOUNDARIES_POLYGON_SUCCESS = "DRAW_BOUNDARIES_POLYGON_SUCCESS"
export const DRAW_BOUNDARIES_POLYGON_ERROR = "DRAW_BOUNDARIES_POLYGON_ERROR"

export const FETCH_LOCATION = "FETCH_LOCATION"
export const LOCATION_CHANGE = "LOCATION_CHANGE"

// Map Markers
export const receiveMarkerLocationError = errors => ({
  type: RECEIVE_MARKER_LOCATION_ERROR,
  errors
})

export const receiveMarkerLocationSuccess = data => ({
  type: RECEIVE_MARKER_LOCATION_SUCCESS,
  data
})

export const receiveMarkerLocation = data => ({
  type: RECEIVE_MARKER_LOCATION,
  data
})

// Lyft Boundaries
export const receiveBoundariesSuccess = data => ({
  type: RECEIVE_BOUNDARIES_SUCCESS,
  data
})

export const receiveBoundariesErrors = errors => ({
  type: RECEIVE_BOUNDARIES_ERROR,
  errors
})

export const receiveBoundaries = data => ({
  type: RECEIVE_BOUNDARIES,
  data
})

// Map Location
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

// Polygon
export const receiveDrawBoundariesPolygonSuccess = data => ({
  type: DRAW_BOUNDARIES_POLYGON_SUCCESS,
  data
})

export const receiveDrawBoundariesPolygonErrors = errors => ({
  type: DRAW_BOUNDARIES_POLYGON_ERROR,
  errors
})

export const receiveDrawBoundariesPolygon = data => ({
  type: DRAW_BOUNDARIES_POLYGON,
  data
})
