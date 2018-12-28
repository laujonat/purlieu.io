import {
  RECEIVE_BOUNDARIES_SUCCESS,
  RECEIVE_BOUNDARIES_ERROR
} from "../actions"

const initialState = {
  boundaries: [{ point: 222 }, { point: 333 }]
}

const lyftReducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }

  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS:
      newState.boundaries = action.data
      return newState
    case RECEIVE_BOUNDARIES_ERROR:
      return {
        ...newState,
        errors: action.errors
      }

    default:
      return state
  }
}

export default lyftReducer
