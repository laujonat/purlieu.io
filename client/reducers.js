import { combineReducers } from "redux"

import map from "./components/Map/reducer"
import lyft from "./lyft/reducer"

export default combineReducers({
  map,
  lyft
})
