import { RECEIVE_BOUNDARIES_SUCCESS } from "./actions"

export const initialState = {
  markers: []
}

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_BOUNDARIES_SUCCESS: {
      const {
        geoLocation: { location }
      } = action.data
      return {
        ...newState,
        markers: [...newState.markers, location]
      }
    }
    default:
      return state
  }
}

export default reducer
