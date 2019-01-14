import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_BOUNDARIES,
  receiveBoundariesSuccess,
  receiveBoundariesErrors
} from "./actions"

import api from "../services"

function* generateBoundaries({ data }) {
  console.log("DATA", data)
  try {
    const boundaries = yield call(api.getBoundaries, data)
    yield put(receiveBoundariesSuccess({ ...data, boundaries }))
  } catch (error) {
    yield put(receiveBoundariesErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_BOUNDARIES, generateBoundaries)
}
