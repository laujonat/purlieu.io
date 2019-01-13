import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_SUCCESS
} from "./actions"

export const initialState = {
  isFetching: true
}

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      return Object.assign({}, newState, action.data)
    default:
      return state
  }
}

export default reducer
