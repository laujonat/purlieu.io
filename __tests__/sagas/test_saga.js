import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"
import { RECEIVE_TEST, receiveTestSuccess, receiveTestErrors } from "../actions/test_actions"

export function* testSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:8000/test")
    yield put(receiveTestSuccess(response.data))
  } catch (error) {
    yield put(receiveTestErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_TEST, testSaga)
}
