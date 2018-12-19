import { combineReducers } from 'redux';
import lyftReducer from './lyft_reducer'

export default combineReducers({
  lyft: lyftReducer
});