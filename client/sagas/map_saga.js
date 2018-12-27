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
    yield put(receiveClientAddressSuccess(location))
  } catch (error) {
    yield put(receiveClientAddressErrors(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_CLIENT_ADDRESS, fetchClientLocation)
}
