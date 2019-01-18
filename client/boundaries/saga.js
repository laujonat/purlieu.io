import { call, put, fork, throttle } from "redux-saga/effects"
import { delay } from "redux-saga"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import api from "../services"
import { createMarker } from "../lib/map"

const google = global.google

export function* dropMarker(marker) {
  yield (delay, 300)
  marker.setAnimation(google.maps.Animation.BOUNCE)
}

export function* generateBoundaries({ data }) {
  let marker
  try {
    marker = yield call(createMarker, data.location, data.map)
    yield fork(dropMarker, marker)

    const boundaries = yield call(api.getBoundaries, data, marker)
    marker.setAnimation(null)

    yield put(
      receiveBoundariesSuccess({
        amount: data.amount,
        location: data.location,
        address: data.address,
        rideType: data.rideType,
        carrier: data.carrier,
        marker,
        boundaries
      })
    )
  } catch (error) {
    marker.setMap(null)
    yield put(receiveBoundariesErrors(error))
  }
}

export default function*() {
  yield throttle(5000, RECEIVE_BOUNDARIES, generateBoundaries)
}
