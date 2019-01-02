import lyftSagas from "./lyft_saga"
import mapSagas from "./map_saga"
import { fork } from "redux-saga/effects"

export default function* rootSaga() {
  yield fork(mapSagas)
  yield fork(lyftSagas)
}
