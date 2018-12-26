import { call, put, take } from "redux-saga/effects"
import {
  RECEIVE_CLIENT_ADDRESS,
  receiveClientAddressSuccess,
  receiveClientAddressErrors
} from "../actions"

// when the page loads, we the map to not be "locked" like it is in moneymile
// you should still be able to move the map around while the location is fetching
// we'll notify the user if we can't find them with a red text or soemthing.
// otherwise, snap to location on map
// input form should be populated with the user location

// GOAL: No operation should ever be blocking the entire application.
// Just use Google Maps for an example.
// When you input an address and it calculates the route for you,
// the page doesn't just freeze, you are still able to interact with other parts of the
// Nav bar. that's the goal.
function* fetchClientLocation() {
  try {
    const endPoint = yield call(
      [axios, axios.get],
      "http://localhost:8000/loctest"
    )

    yield put(receiveClientAddressSuccess(endPoint.data))
  } catch (error) {
    yield put(receiveClientAddressErrors, error)
  }
}

export default function*() {
  yield takeLatest(RECEIVE_CLIENT_ADDRESS, fetchClientLocation)
}
