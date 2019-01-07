export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES"
export const RECEIVE_BOUNDARIES_SUCCESS = "RECEIVE_BOUNDARIES_SUCCESS"
export const RECEIVE_BOUNDARIES_ERROR = "RECEIVE_BOUNDARIES_ERROR"

export const DRAW_BOUNDARIES_POLYGON = "DRAW_BOUNDARIES_POLYGON"
export const DRAW_BOUNDARIES_POLYGON_SUCCESS = "DRAW_BOUNDARIES_POLYGON_SUCCESS"
export const DRAW_BOUNDARIES_POLYGON_ERROR = "DRAW_BOUNDARIES_POLYGON_ERROR"

export const NEW_BOUNDARIES = "NEW_BOUNDARIES"
export const FETCH_BOUNDARIES = "FETCH_BOUNDARIES"

// Fetching
export const fetchBoundaries = () => ({
  type: FETCH_BOUNDARIES
})

// Boundaries
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

export const receiveDrawBoundariesPolygon = data => ({
  type: DRAW_BOUNDARIES_POLYGON,
  data
})
