export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES"
export const RECEIVE_BOUNDARIES_ERROR = "RECEIVE_BOUNDARIES_ERROR"

export const receiveBoundaries = boundaries => ({
  type: RECEIVE_BOUNDARIES,
  payload: boundaries.data
})

export const receiveBoundariesErrors = errors => ({
  type: RECEIVE_BOUNDARIES_ERROR,
  errors
});

export const fetchBoundaries = () => (
  axios.get(`http://localhost:8000/test`)
);
