import lyftSagas from "./lyft/saga"
import mapSagas from "./components/Map/saga"
import { fork } from "redux-saga/effects"

export default function* rootSaga() {
  yield fork(mapSagas)
  yield fork(lyftSagas)
}
