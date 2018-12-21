import { RECEIVE_BOUNDARIES_SUCCESS } from "../actions/lyft_actions"

const initialState = {
  boundaries: []
}

const lyftReducer = (state = initialState, action) => {
  console.log("STAT#E", state)
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS:
      return {
        ...newState,
        boundaries: action.data
      }

    default:
      return state
  }
}

export default lyftReducer
