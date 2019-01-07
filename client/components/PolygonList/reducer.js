import {
  DRAW_POLYGON_SUCCESS,
  DRAW_POLYGON_ERROR,
  FETCH_LOCATION
} from "./actions"

export const initialState = {
  polygonList: {},
  isFetching: true,
  errors: null
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
    case DRAW_POLYGON_SUCCESS:
      return {
        ...newState,
        errors: null,
        isFetching: false,
        clientLocation: action.data
      }
    case DRAW_POLYGON_ERROR:
      return {
        ...newState,
        isFetching: false,
        errors: action.errors
      }
    default:
      return state
  }
}

export default reducer
