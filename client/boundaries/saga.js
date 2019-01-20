import { call, put, fork, select, throttle } from "redux-saga/effects"
import { delay } from "redux-saga"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import api from "../services"
import { createMarker } from "../lib/map"
import { getPolygonListId } from "./selectors"

const google = global.google

export function* dropMarker(marker) {
  yield (delay, 300)
  marker.setAnimation(google.maps.Animation.BOUNCE)
}

export function* generateBoundaries() {
  let marker
  try {
    const current = yield select(getPolygonListId)

    marker = yield call(createMarker, current[0].location, current[0].map)
    yield fork(dropMarker, marker)

    const boundaries = yield call(api.getBoundaries, current[0], marker)
    marker.setAnimation(null)

    yield put(
      receiveBoundariesSuccess({
        amount: current[0].amount,
        location: current[0].location,
        address: current[0].address,
        rideType: current[0].rideType,
        carrier: current[0].carrier,
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
