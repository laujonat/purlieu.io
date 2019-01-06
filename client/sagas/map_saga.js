// import { call, put, takeEvery } from "redux-saga/effects"
// import {
//   RECEIVE_CLIENT_LOCATION,
//   RECEIVE_MARKER_LOCATION,
//   NEW_LOCATION,
//   receiveClientLocationSuccess,
//   receiveClientLocationErrors,
//   receiveMarkerLocationSuccess,
//   receiveMarkerLocationError,
//   fetchLocation
// } from "../actions"
// import api from "../services/map"

// export function* fetchClientLocation() {
//   try {
//     const location = yield call(api.getLocation)
//     const address = yield call(api.getAddress, location)
//     const data = {
//       location,
//       address
//     }

//     yield put(receiveClientLocationSuccess(data))
//   } catch (error) {
//     yield put(receiveClientLocationErrors(error))
//   }
// }

// export function* setMarkerAddress(geoLocation) {
//   const location = geoLocation.data
//   try {
//     const address = yield call(api.getAddress, location)
//     const data = {
//       address,
//       location
//     }

//     yield put(receiveMarkerLocationSuccess(data))
//   } catch (error) {
//     yield put(receiveMarkerLocationError(error))
//   }
// }

// function* handleLocationChange() {
//   yield put(fetchLocation())
// }

// export default function*() {
//   yield takeEvery(RECEIVE_CLIENT_LOCATION, fetchClientLocation)
//   yield takeEvery(RECEIVE_MARKER_LOCATION, setMarkerAddress)
//   yield takeEvery(NEW_LOCATION, handleLocationChange)
// }
