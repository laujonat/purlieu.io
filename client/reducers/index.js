import { combineReducers } from 'redux'
// import lyftReducer from './lyft'

const initialState = {
    boundaries: []
}

const lyftReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'FETCH_BOUNDARIES':
            return {
                ...newState,
                boundaries: [...newState.boundaries, action.data]
            }
    }
    return newState
}


const rootReducer = combineReducers({
    lyft: lyftReducer
});


export default rootReducer