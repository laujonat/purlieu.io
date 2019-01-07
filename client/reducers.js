import { combineReducers } from "redux"

import map from "./components/Map/reducer"
import boundaries from "./boundaries/reducer"

export default combineReducers({
  map,
  boundaries
})
