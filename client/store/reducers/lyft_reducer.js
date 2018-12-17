import { RECEIVE_BOUNDARIES } from '../actions/lyft_actions'

const initialState = {
  boundaries: []
}

const lyftReducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state };
  console.log(action)
  switch (action.type) {
    case RECEIVE_BOUNDARIES:
      return {
        ...newState,
        boundaries: action.payload
      }
    default: 
      return state
  }
}


export default lyftReducer