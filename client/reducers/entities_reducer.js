import { combineReducers } from "redux"
import lyftReducer from "./lyft_reducer"
import mapReducer from "./map_reducer"

export default combineReducers({
  lyft: lyftReducer,
  map: mapReducer
})
