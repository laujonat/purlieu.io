export const RECEIVE_TEST = "RECEIVE_TEST"
export const RECEIVE_TEST_SUCCESS = "RECEIVE_TEST_SUCCESS"
export const RECEIVE_TEST_ERROR = "RECEIVE_TEST_ERROR"

export const receiveTestSuccess = data => ({
  type: RECEIVE_TEST_SUCCESS,
  data
})

export const receiveTestErrors = errors => ({
  type: RECEIVE_TEST_ERROR,
  errors
})

export const receiveTest = data => ({
  type: RECEIVE_TEST,
  data
})
