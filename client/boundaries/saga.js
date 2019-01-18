import { call, put, takeEvery } from "redux-saga/effects"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"

import api from "../services"

export function* generateBoundaries({ data }) {
  try {
    const boundaries = yield call(api.getBoundaries, data)
    yield put(
      receiveBoundariesSuccess({
        amount: data.amount,
        location: data.location,
        address: data.address,
        rideType: data.rideType,
        carrier: data.carrier,
        boundaries
      })
    )
  } catch (error) {
    yield put(receiveBoundariesErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_BOUNDARIES, generateBoundaries)
}
