import {
  RECEIVE_CLIENT_LOCATION,
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_ERROR,
  DRAW_POLYGON,
  DRAW_POLYGON_SUCCESS,
  DRAW_POLYGON_ERROR
} from "../Map/actions"

import {
  RECEIVE_BOUNDARIES,
  RECEIVE_BOUNDARIES_SUCCESS,
  RECEIVE_BOUNDARIES_ERROR
} from "../../boundaries/actions"

const initialState = {}

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }

  switch (action.type) {
    case DRAW_POLYGON:
    case RECEIVE_BOUNDARIES:
    case RECEIVE_MARKER_LOCATION:
    case RECEIVE_CLIENT_LOCATION:
      return {
        ...newState,
        [action.type]: true
      }
    case DRAW_POLYGON_SUCCESS:
    case DRAW_POLYGON_ERROR:
      delete newState[DRAW_POLYGON]
      return newState
    case RECEIVE_BOUNDARIES_SUCCESS:
    case RECEIVE_BOUNDARIES_ERROR:
      delete newState[RECEIVE_BOUNDARIES]
      return newState
    case RECEIVE_MARKER_LOCATION_SUCCESS:
    case RECEIVE_MARKER_LOCATION_ERROR:
      delete newState[RECEIVE_MARKER_LOCATION]
      return newState
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
    case RECEIVE_CLIENT_LOCATION_ERROR:
      delete newState[RECEIVE_CLIENT_LOCATION]
      return newState
    default:
      return state
  }
}

export default reducer
