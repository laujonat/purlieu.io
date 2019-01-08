import { combineReducers } from "redux"

import map from "./components/Map/reducer"
import polygonList from "./components/PolygonList/reducer"
// import loading from "./loading/reducer"
import errors from "./errors/reducer"

export default combineReducers({
  map,
  polygonList,
  // loading,
  errors
})
