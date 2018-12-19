import {
  RECEIVE_BOUNDARIES,
  RECEIVE_BOUNDARIES_SUCCESS,
  receiveBoundaries,
  fetchBoundaries,
  test
} from '../actions/lyft_actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// worker
function* getEndpoints(action) {
  try {
    const payload  = yield call(test, action.payload)
    console.log("ASDSD", payload)
    // dispatch action to change redux state
    yield put({
      test
    })
  } catch (error) {
    console.error("ADASLKJD")
    // yield put(receiveBoundariesErrors({ errors: error }));

  }
}

// watcher
export default function* lyftAPiWatcher() {
  yield takeEvery(RECEIVE_BOUNDARIES, getEndpoints)
}