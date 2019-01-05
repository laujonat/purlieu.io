import {
  RECEIVE_BOUNDARIES_SUCCESS,
  RECEIVE_BOUNDARIES_ERROR
} from "../actions"

const initialState = {
  boundaries: [],
  isFetching: false
}

const lyftReducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }

  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS:
      newState.boundaries = action.data
      return {
        ...newState,
        boundaries: action.data,
        isFetching: false
      }
    case RECEIVE_BOUNDARIES_ERROR:
      return {
        ...newState,
        errors: action.errors,
        isFetching: false
      }

    default:
      return state
  }
}

export default lyftReducer
