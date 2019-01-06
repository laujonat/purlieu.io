import { combineReducers } from "redux"

import map from "./components/Map/reducer"
import lyft from "./reducer"

export default combineReducers({
  map,
  lyft
})
