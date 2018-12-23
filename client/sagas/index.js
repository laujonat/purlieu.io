import lyftAPiWatcher from "./lyft_saga"
import spikeWatcher from "./spike_saga"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([spikeWatcher(), lyftAPiWatcher()])
}
