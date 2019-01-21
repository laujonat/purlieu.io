import { call, put, fork, select, throttle } from "redux-saga/effects"
import { delay } from "redux-saga"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import api from "../services"
import { createMarker } from "../lib/map"
import { selectCurrentCard } from "./selectors"

const google = global.google

export function* dropMarker(marker) {
  yield (delay, 300)
  marker.setAnimation(google.maps.Animation.BOUNCE)
}

export function* generateBoundaries() {
  let marker
  try {
    const current = yield select(selectCurrentCard)

    marker = yield call(createMarker, current.location, current.map)
    yield fork(dropMarker, marker)

    const boundaries = yield call(api.getBoundaries, current)
    marker.setAnimation(null)

    yield put(
      receiveBoundariesSuccess({
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
