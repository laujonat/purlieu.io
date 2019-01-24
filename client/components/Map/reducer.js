import {
  RECEIVE_MAP,
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  DRAW_POLYGON_SUCCESS
} from "./actions"
import { DELETE_POLYGON_CARD } from "../../components/PolygonList/actions"
import { RECEIVE_BOUNDARIES_SUCCESS } from "../../boundaries/actions"

export const initialState = {
  markers: [],
  boundaries: [],
  polygons: []
}

const google = global.google

export const reducer = (state = initialState, action) => {
  Object.freeze(state)
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_MAP:
      return {
        ...newState,
        map: action.data
      }
    case RECEIVE_CLIENT_LOCATION_SUCCESS:
    case RECEIVE_MARKER_LOCATION_SUCCESS:
      return {
        ...newState,
        ...action.data
      }
    case RECEIVE_BOUNDARIES_SUCCESS: {
      const { marker, boundaries } = action.data

      return {
        ...newState,
        boundaries: [...newState.boundaries, boundaries],
        markers: [...newState.markers, marker]
      }
    }
    case DRAW_POLYGON_SUCCESS: {
      const { polygon } = action.data
      return {
        ...newState,
        polygons: [...newState.polygons, polygon]
      }
    }
    case DELETE_POLYGON_CARD:
      newState.markers[action.data].setMap(null)
      newState.polygons[action.data].setMap(null)
      delete newState.boundaries[action.data]
      newState.markers.splice(action.data, 1)
      newState.polygons.splice(action.data, 1)
      return {
        ...newState,
        markers: newState.markers,
        polygons: newState.polygons
      }
    default:
      return state
  }
}

export default reducer
