import {
  RECEIVE_BOUNDARIES,
  receiveBoundaries,
  receiveBoundariesErrors
} from "../actions/lyft_actions"
import { call, put, takeEvery } from "redux-saga/effects"

function* getEndpoints(action) {
  console.log("hdd")
  try {
    const endPoint = yield call(receiveBoundaries, action.data)

    // dispatch action to change redux state
    yield put(receiveBoundariesSuccess, endPoint)
  } catch (error) {
    yield put(receiveBoundariesErrors, error)
  }
}

export default function*() {
  yield takeEvery(RECEIVE_BOUNDARIES, getEndpoints)
}
