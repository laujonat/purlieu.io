import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_ERROR,
  DRAW_POLYGON_SUCCESS,
  DRAW_POLYGON_ERROR
} from "../components/Map/actions"

import {
  RECEIVE_BOUNDARIES_SUCCESS,
  RECEIVE_BOUNDARIES_ERROR,
} from "../boundaries/actions"

export const initialState = {}

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
      delete newState[RECEIVE_CLIENT_LOCATION_ERROR]
      return newState;
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      delete newState[RECEIVE_MARKER_LOCATION_ERROR]
      return newState;
    case RECEIVE_BOUNDARIES_SUCCESS:
      delete newState[RECEIVE_BOUNDARIES_ERROR]
      return newState;
    case DRAW_POLYGON_SUCCESS:
      delete newState[DRAW_POLYGON_ERROR]
      return newState;
    case RECEIVE_CLIENT_LOCATION_ERROR:
    case RECEIVE_MARKER_LOCATION_ERROR:
    case RECEIVE_BOUNDARIES_ERROR:
    case DRAW_POLYGON_ERROR:
      return {
        ...newState,
        [action.type]: action.data
      }
    default:
      return state
  }
}

export default reducer
