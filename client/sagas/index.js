import lyftSagas from "./lyft_saga"
import mapSagas from "./map_saga"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([lyftSagas(), mapSagas()])
}
