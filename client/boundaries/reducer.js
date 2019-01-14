import { RECEIVE_BOUNDARIES_SUCCESS } from "./actions"
import { pipe } from "rxjs";

const initialState = {
  markers: []
}

const reducer = (state = initialState, action) => {
  console.log(action)
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS:
      const {
        geoLocation: { location }
      } = action.data
      return {
        ...newState,
        markers: [...newState.markers, location]
      }
    default:
      return state
  }
}

export default reducer