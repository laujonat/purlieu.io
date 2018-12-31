import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_CLIENT_LOCATION,
  RECEIVE_MARKER_LOCATION,
  receiveClientLocationSuccess,
  receiveClientLocationErrors,
  receiveMarkerLocationSuccess,
  receiveMarkerLocationError
} from "../actions"
import api from "../services/map"

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

export function* fetchMarkerAddress(geoLocation) {
  try {
    const address = yield call(api.getAddress, geoLocation.data)

    yield put(receiveMarkerLocationSuccess(address))
  } catch (error) {
    yield put(receiveMarkerLocationError(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_CLIENT_LOCATION, fetchClientLocation)
  yield takeEvery(RECEIVE_MARKER_LOCATION, fetchMarkerAddress)
}
