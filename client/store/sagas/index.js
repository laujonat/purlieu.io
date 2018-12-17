import { receiveBoundaries, receiveBoundariesErrors } from '../actions/lyft_actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


const lyftApi = () => {
    let result 
    result = axios.get("/test").then(res => {
        result = res
    }).catch(errors => { })
    return result
}

// worker
function* fetchBoundaries(action) {
    try {
        const boundaries = yield call(lyftApi, action.payload)
        // dispatch action to change redux state
        yield put(receiveBoundaries(boundaries.payload))

    } catch(error) {
        yield put(receiveBoundariesErrors)
    }   
    
}

// watcher
export default function* fetchBoundariesWatcher() {
    yield takeEvery('RECEIVE_BOUNDARIES', fetchBoundaries)
}