import { call, put, fork, throttle, take, cancel, spawn } from "redux-saga/effects"
import { delay } from "redux-saga"
import { RECEIVE_BOUNDARIES, receiveBoundariesSuccess, receiveBoundariesErrors, RECEIVE_BOUNDARIES_SUCCESS, RECEIVE_BOUNDARIES_ERROR } from "./actions"

import api from "../services"

import { createMarker } from "../lib/map"
import { receiveMarkerDrop } from "../components/Map/actions";

function* dropMarker(marker) {
  // const marker = yield call(createMarker, data.location, data.map)
  yield (delay, 300)
  marker.setAnimation(google.maps.Animation.BOUNCE)
  yield(put(receiveMarkerDrop(marker)))
}

function* getBoundaries(data, marker) {
  try {
    const boundaries = yield call(api.getBoundaries, data)
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

  }
 
}

function* generateBoundaries({ data }) {
  try {
    const marker = yield call(createMarker, data.location, data.map)
    console.log(dropMarker, marker)
    const dropMarker = yield fork(dropMarker, marker)
    // const boundaries = yield call(api.getBoundaries, data)
    // while(true) {
      // yield fork(getBoundaries, data, marker)
      // yield take
    const action = yield take('RECEIVE_MARKER_DROP')

      // const action = yield take([RECEIVE_BOUNDARIES_SUCCESS, RECEIVE_BOUNDARIES_ERROR])
      if(action) {
        console.log("hello")
        cancel(dropMarker)
        // cancel(getBoundaries)
      }
    // dropMarker.cancel()
    yield put(
      receiveBoundariesSuccess({
        amount: data.amount,
        location: data.location,
        address: data.address,
        rideType: data.rideType,
        carrier: data.carrier,
        // marker,
        boundaries
      })
    )
    // }
  } catch (error) {
    yield put(receiveBoundariesErrors(error))
  }
}

export default function*() {
  yield throttle(5000, RECEIVE_BOUNDARIES, generateBoundaries)
}
