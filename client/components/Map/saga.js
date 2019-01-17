import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_CLIENT_LOCATION,
  RECEIVE_MARKER_LOCATION,
  DRAW_POLYGON,
  receiveClientLocationSuccess,
  receiveClientLocationErrors,
  receiveMarkerLocationSuccess,
  receiveMarkerLocationError,
  receiveDrawPolygonSuccess,
  receiveDrawPolygonError
} from "../Map/actions"

import api from "../../services/map"
import { createPolygon } from "../../lib/map"

export function* fetchClientLocation() {
  try {
    const location = yield call(api.getLocation)
    const address = yield call(api.getAddress, location)
    const data = {
      location,
      address
    }

    yield put(receiveClientLocationSuccess(data))
  } catch (error) {
    yield put(receiveClientLocationErrors(error))
  }
}

export function* setMarkerAddress(geoLocation) {
  const location = geoLocation.data
  try {
    const address = yield call(api.getAddress, location)
    const data = {
      location,
      address
    }
    yield put(receiveMarkerLocationSuccess(data))
  } catch (error) {
    yield put(receiveMarkerLocationError(error))
  }
}

function* drawPolygon({ data }) {
  try {
    const boundaries = yield call(api.getRecalculatedBoundaries, data)
    const polygon = createPolygon(boundaries, data.map)

    yield put(receiveDrawPolygonSuccess({ address: data.address, polygon }))
  } catch (error) {
    yield put(receiveDrawPolygonError(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_CLIENT_LOCATION, fetchClientLocation)
  yield takeEvery(RECEIVE_MARKER_LOCATION, setMarkerAddress)
  yield takeEvery(DRAW_POLYGON, drawPolygon)
}
