import {
  RECEIVE_CLIENT_ADDRESS_SUCCESS,
  RECEIVE_CLIENT_ADDRESS_ERROR,
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
    case RECEIVE_CLIENT_ADDRESS_SUCCESS:
      return {
        ...newState,
        isFetching: false,
        clientLocation: action.data
      }
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      newState.clientLocation.address = action.data
      return newState
    case RECEIVE_CLIENT_ADDRESS_ERROR:
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
