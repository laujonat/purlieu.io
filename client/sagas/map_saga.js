import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"
import {
  RECEIVE_CLIENT_ADDRESS,
  receiveClientAddressSuccess,
  receiveClientAddressErrors
} from "../actions"
import api from "../services/map"

function* fetchClientLocation() {
  try {
    const location = yield call(api.getLocation)
    const address = yield call(api.getAddress, location)
    const data = {
      location,
      address
    }

    yield put(receiveClientAddressSuccess(data))
  } catch (error) {
    yield put(receiveClientAddressErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_CLIENT_ADDRESS, fetchClientLocation)
}
