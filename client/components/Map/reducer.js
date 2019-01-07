import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  FETCH_LOCATION
} from "./actions"

export const initialState = {
  clientLocation: "",
  isFetching: true,
}

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...newState,
        isFetching: true
      }
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      return Object.assign({}, newState, action.data)
    default:
      return state
  }
}

export default reducer
