import { RECEIVE_CLIENT_ADDRESS_SUCCESS } from "../actions"

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
    default:
      return state
  }
}

export default mapReducer
