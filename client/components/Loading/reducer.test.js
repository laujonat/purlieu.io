import { reducer, initialState } from "./reducer"
import {
  DRAW_POLYGON,
  DRAW_POLYGON_SUCCESS,
  DRAW_POLYGON_ERROR,
  RECEIVE_CLIENT_LOCATION,
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_ERROR
} from "../Map/actions"

describe("Loading reducer", () => {
  it("should handle DRAW_POLYGON", () => {
    const action = { type: DRAW_POLYGON }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      [action.type]: true
    })
  })

  it("should handle DRAW_POLYGON_SUCCESS", () => {
    const action = { type: DRAW_POLYGON_SUCCESS }
    expect(reducer(initialState, action)).toEqual({})
  })

  it("should handle DRAW_POLYGON_ERROR", () => {
    const action = { type: DRAW_POLYGON_ERROR }
    expect(reducer(initialState, action)).toEqual({})
  })

  it("should handle RECEIVE_MARKER_LOCATION", () => {
    const action = { type: RECEIVE_MARKER_LOCATION }

    expect(reducer(initialState, action)).toEqual({
      [action.type]: true
    })
  })

  it("should handle RECEIVE_MARKER_LOCATION_SUCCESS", () => {
    const action = { type: RECEIVE_MARKER_LOCATION_SUCCESS }

    expect(reducer(initialState, action)).toEqual({})
  })

  it("should handle RECEIVE_MARKER_LOCATION_ERROR", () => {
    const action = { type: RECEIVE_MARKER_LOCATION_ERROR }

    expect(reducer(initialState, action)).toEqual({})
  })

  it("should handle RECEIVE_CLIENT_LOCATION", () => {
    const action = { type: RECEIVE_CLIENT_LOCATION }

    expect(reducer(initialState, action)).toEqual({
      [action.type]: true
    })
  })

  it("should handle RECEIVE_CLIENT_LOCATION_SUCCESS", () => {
    const action = { type: RECEIVE_CLIENT_LOCATION_SUCCESS }

    expect(reducer(initialState, action)).toEqual({})
  })

  it("should handle RECEIVE_CLIENT_LOCATION_ERROR", () => {
    const action = { type: RECEIVE_CLIENT_LOCATION_ERROR }

    expect(reducer(initialState, action)).toEqual({})
  })
})
