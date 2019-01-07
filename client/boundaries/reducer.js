import {
  RECEIVE_BOUNDARIES_SUCCESS,
  RECEIVE_BOUNDARIES_ERROR,
  FETCH_BOUNDARIES
} from "./actions"

const initialState = []

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case FETCH_BOUNDARIES:
      return {
        ...newState,
        isFetching: true
      }
    case RECEIVE_BOUNDARIES_SUCCESS:
      return Object.assign({}, ...newState, action.data)
    case RECEIVE_BOUNDARIES_ERROR:
      return {
        ...newState,
        isFetching: false,
        errors: action.errors
      }

    default:
      return state
  }
}

export default reducer
