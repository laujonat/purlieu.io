import { DELETE_POLYGON_CARD, RECEIVE_POLYGON_CARD_SUCCESS } from "./actions"
const initialState = []

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = [...state]
  switch (action.type) {
    case RECEIVE_POLYGON_CARD_SUCCESS:
      return [...newState, action.data]
    case DELETE_POLYGON_CARD:
      newState.splice(action.data, 1)
      console.log("NEWSTATE", newState)
      return newState
    default:
      return state
  }
}

export default reducer
