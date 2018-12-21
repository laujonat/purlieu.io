export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES"
export const RECEIVE_BOUNDARIES_SUCCESS = "RECEIVE_BOUNDARIES_SUCCESS"
export const RECEIVE_BOUNDARIES_ERROR = "RECEIVE_BOUNDARIES_ERROR"

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

