import { put, takeEvery } from "redux-saga/effects"
import { RECEIVE_POLYGON_CARD } from "./actions"
import { receivePolygonCardSuccess, receivePolygonCardError } from "./actions"

function* addPolygonCard({ data }) {
  try {
    yield put(
      receivePolygonCardSuccess({
        amount: data.amount,
        location: data.location,
        address: data.address,
        rideType: data.rideType,
        carrier: data.carrier
      })
    )
  } catch (error) {
    yield put(receivePolygonCardError(error))
  }
}

export default function*() {
  yield takeEvery(RECEIVE_POLYGON_CARD, addPolygonCard)
}
