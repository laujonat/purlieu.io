const RECEIVE_TEST = "RECEIVE_TEST"
const RECEIVE_TEST_SUCCESS = "RECEIVE_TEST_SUCCESS"
const RECEIVE_TEST_ERROR = "RECEIVE_TEST_ERROR"

const receiveTestSuccess = data => ({
  type: RECEIVE_TEST_SUCCESS,
  data
})

const receiveTestErrors = errors => ({
  type: RECEIVE_TEST_ERROR,
  errors
})

const receiveTest = data => ({
  type: RECEIVE_TEST,
  data
})

export default {
  RECEIVE_TEST,
  RECEIVE_TEST_SUCCESS,
  RECEIVE_TEST_ERROR,
  receiveTestSuccess,
  receiveTestErrors,
  receiveTest
}
