import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* fetchBoundaries() {
    const boundaries = yield call([axios, axios.get], 'http://localhost:8000/test')
    yield put({type: 'FETCH_BOUNDARIES_SUCCESS', payload: boundaries.data})
}

export function* fetchBoundariesWatcher() {
    yield takeEvery('FETCH_BOUNDARIES', fetchBoundaries)
}