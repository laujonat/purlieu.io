import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_BOUNDARIES,
  NEW_BOUNDARIES,
  receiveBoundariesSuccess,
  receiveBoundariesErrors,
  fetchBoundaries
} from "./actions"

import api from "../services/lyft"

function* generateBoundaries({ data }) {
  try {
    const boundaries = yield call(api.getBoundaries, data)
    yield put(receiveBoundariesSuccess(boundaries))
  } catch (error) {
    yield put(receiveBoundariesErrors(error))
  }
}

function* spawnBoundaries() {
  yield put(fetchBoundaries())
}

export default function*() {
  yield takeEvery(NEW_BOUNDARIES, spawnBoundaries),
  yield takeEvery(RECEIVE_BOUNDARIES, generateBoundaries)
}
