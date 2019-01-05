import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_ERROR,
  FETCH_LOCATION
} from "../actions"

export const initialState = {
  clientLocation: "",
  isFetching: true,
  errors: null
}

export const mapReducer = (state = initialState, action) => {
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
      return {
        ...newState,
        errors: null,
        isFetching: false,
        clientLocation: action.data
      }
    case RECEIVE_CLIENT_LOCATION_ERROR:
    case RECEIVE_MARKER_LOCATION_ERROR:
      return {
        ...newState,
        isFetching: false,
        errors: action.errors
      }
    default:
      return state
  }
}

export default mapReducer
