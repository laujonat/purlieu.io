import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_BOUNDARIES,
  receiveBoundariesSuccess,
  receiveBoundariesErrors
} from "../actions"
import axios from "axios"

function* getEndpoints() {
  try {
    const endPoint = yield call(
      [axios, axios.get],
      "http://localhost:8000/test"
    )
    yield put(receiveBoundariesSuccess(endPoint.data))
  } catch (error) {
    yield put(receiveBoundariesErrors, error)
  }
}

export default function*() {
  yield takeEvery(RECEIVE_BOUNDARIES, getEndpoints)
}
