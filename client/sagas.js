import boundariesSagas from "./boundaries/saga"
import mapSagas from "./components/Map/saga"
import { fork } from "redux-saga/effects"

export default function* rootSaga() {
  yield fork(mapSagas)
  yield fork(boundariesSagas)
}
