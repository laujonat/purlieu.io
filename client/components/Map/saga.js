import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_CLIENT_LOCATION,
  RECEIVE_MARKER_LOCATION,
  NEW_LOCATION,
  receiveClientLocationSuccess,
  receiveClientLocationErrors,
  receiveMarkerLocationSuccess,
  receiveMarkerLocationError,
  fetchLocation
} from "../Map/actions"

import {
  DRAW_POLYGON,
  receiveDrawPolygonSuccess,
  receiveDrawPolygonError
} from "../../boundaries/actions"

import api from "../../services/map"

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
      address,
      location
    }

    yield put(receiveMarkerLocationSuccess(data))
  } catch (error) {
    yield put(receiveMarkerLocationError(error))
  }
}

export function* handleLocationChange() {
  yield put(fetchLocation())
}

function* drawPolygonFlow({ data }) {
  try {
    const boundaries = yield call(api.getRecalculatedBoundaries, data)

    const bermudaPolygon = new google.maps.Polygon({
      paths: boundaries,
      strokeColor: "#f7a0ff",
      strokeOpacity: 0.7,
      strokeWeight: 0.5,
      fillColor: "#f7a0ff",
      fillOpacity: 0.35
    })

    const bounds = new google.maps.LatLngBounds()
    boundaries.forEach(coord => bounds.extend(coord))
    data.map.fitBounds(bounds)
    bermudaPolygon.setMap(data.map)

    yield put(receiveDrawPolygonSuccess(boundaries))
  } catch (error) {
    yield put(receiveDrawPolygonError(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_CLIENT_LOCATION, fetchClientLocation)
  yield takeEvery(RECEIVE_MARKER_LOCATION, setMarkerAddress)
  yield takeEvery(NEW_LOCATION, handleLocationChange)
  yield takeEvery(DRAW_POLYGON, drawPolygonFlow)
}