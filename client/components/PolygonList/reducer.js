import { RECEIVE_BOUNDARIES_SUCCESS } from "../../boundaries/actions"
import { DELETE_POLYGON_CARD, RECEIVE_POLYGON_CARD } from "./actions"
const initialState = []

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = [...state]
  switch (action.type) {
    case RECEIVE_POLYGON_CARD:
      return [...newState, action.data]
    case RECEIVE_BOUNDARIES_SUCCESS:
      const currentCard = newState.slice(-1)[0]
      currentCard.boundaries = action.data.boundaries
      return [...newState, currentCard]
    case DELETE_POLYGON_CARD:
      newState.splice(action.data, 1)
      return newState
    default:
      return state
  }
}

export default reducer
