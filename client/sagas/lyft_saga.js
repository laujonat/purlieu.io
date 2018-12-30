import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_BOUNDARIES,
  receiveBoundariesSuccess,
  receiveBoundariesErrors
} from "../actions"
import api from "../services/lyft"

function* fetchBoundaries({ data }) {
  try {
    const boundaries = yield call(api.getBoundaries, data)
    yield put(receiveBoundariesSuccess(boundaries))
  } catch (error) {
    yield put(receiveBoundariesErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_BOUNDARIES, fetchBoundaries)
}
