export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES"
export const RECEIVE_BOUNDARIES_SUCCESS = "RECEIVE_BOUNDARIES_SUCCESS"
export const RECEIVE_BOUNDARIES_ERROR = "RECEIVE_BOUNDARIES_ERROR"
import axios from 'axios'

export const test = () => {
  return
    type: RECEIVE_BOUNDARIES
};

export const receiveBoundaries = payload => {
  return {
    type: RECEIVE_BOUNDARIES,
    payload: payload.data
  }
}

export const receiveBoundariesErrors = errors => ({
  type: RECEIVE_BOUNDARIES_ERROR,
  errors
});


export const fetchBoundaries = () => {
  axios.get("/test").then(res => {
    return res
  })
}