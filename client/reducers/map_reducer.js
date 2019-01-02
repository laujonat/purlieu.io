import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_ERROR
} from "../actions"

const initialState = {
  clientLocation: "",
  isFetching: true
}

const mapReducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
      return {
        ...newState,
        isFetching: false,
        clientLocation: action.data
      }
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      return {
        ...newState,
        clientLocation: {
          ...state.clientLocation,
          address: action.data
        }
      }
    case RECEIVE_CLIENT_LOCATION_ERROR:
    case RECEIVE_MARKER_LOCATION_ERROR:
      return {
        ...newState,
        isFetching: false
      }
    default:
      return state
  }
}

export default mapReducer
