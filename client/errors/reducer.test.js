import { reducer, initialState } from "./reducer"
import {
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION_ERROR,
  DRAW_POLYGON_ERROR
} from "../components/Map/actions"
import { RECEIVE_BOUNDARIES_ERROR } from "../boundaries/actions"

describe("errors reducer", () => {
  it("should handle RECEIVE_CLIENT_LOCATION_ERROR", () => {
    const action = {
      type: RECEIVE_CLIENT_LOCATION_ERROR,
      data: "error message"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      [action.type]: action.data
    })
  })

  it("should handle RECEIVE_MARKER_LOCATION_ERROR", () => {
    const action = {
      type: RECEIVE_MARKER_LOCATION_ERROR,
      data: "error message"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      [action.type]: action.data
    })
  })

  it("should handle RECEIVE_BOUNDARIES_ERROR", () => {
    const action = {
      type: RECEIVE_BOUNDARIES_ERROR,
      data: "error message"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      [action.type]: action.data
    })
  })

  it("should handle DRAW_POLYGON_ERROR", () => {
    const action = {
      type: DRAW_POLYGON_ERROR,
      data: "error message"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      [action.type]: action.data
    })
  })

  it("should clear the appropriate error", () => {
    let action = {
      type: DRAW_POLYGON_ERROR,
      data: "error message"
    }

    const errorState = reducer(initialState, action)
    expect(errorState).toEqual({
      ...initialState,
      [action.type]: action.data
    })

    action = {
      type: "RANDOM_SUCCESS"
    }
    expect(reducer(errorState, action)).toEqual(errorState)

    action = {
      type: "DRAW_POLYGON_SUCCESS"
    }
    expect(reducer(errorState, action)).toEqual(initialState)
  })
})
