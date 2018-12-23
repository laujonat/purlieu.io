import lyftAPiWatcher from "./lyft_saga"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([lyftAPiWatcher()])
}
