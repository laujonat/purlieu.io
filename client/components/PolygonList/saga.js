import { call, put, takeEvery } from "redux-saga/effects"
import { RECEIVE_POLYGON_CARD } from "./actions"

function* addPolygonCard({ data }) {}

export default function*() {
  yield takeEvery(RECEIVE_POLYGON_CARD, addPolygonCard)
}
