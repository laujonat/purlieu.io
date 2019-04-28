import { call, put, fork, select, throttle, delay } from "redux-saga/effects"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import api from "../services/boundaries"
import { createMarker } from "../shared/map"
import { selectCurrentCard } from "../components/PolygonList/selectors"
import { selectMap } from "../components/Map/selectors"

const google = global.google

export function* dropMarker(marker) {
  yield (delay, 300)
  marker.setAnimation(google.maps.Animation.BOUNCE)
}

export function* generateBoundaries({ data }) {
  let marker
  try {
    const card = yield select(selectCurrentCard, data)
    const map = yield select(selectMap)

    marker = yield call(createMarker, card.location, map)
    yield fork(dropMarker, marker)

    const boundaries = yield call(api.getBoundaries, card)
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
