import { RECEIVE_BOUNDARIES_SUCCESS } from "../../boundaries/actions"

const initialState = []

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = [...state]
  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS:
      return [...newState, action.data]
    default:
      return state
  }
}

export default reducer
