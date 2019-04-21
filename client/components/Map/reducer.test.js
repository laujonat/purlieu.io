import { reducer, initialState } from "./reducer"
import {
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_SUCCESS
} from "./actions"

describe("map reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it("should handle RECEIVE_CLIENT_LOCATION_SUCCESS", () => {
    const action = {
      type: RECEIVE_CLIENT_LOCATION_SUCCESS,
      data: {
        address: "123 Street"
      }
    }
    expect(reducer(initialState, action)).toEqual(
      Object.assign({}, initialState, action.data)
    )
  })

  it("should handle RECEIVE_MARKER_LOCATION_SUCCESS", () => {
    const action = {
      type: RECEIVE_MARKER_LOCATION_SUCCESS,
      data: {
        lat: -12.333,
        lng: 11.234
      }
    }
    expect(reducer(initialState, action)).toEqual(
      Object.assign({}, initialState, action.data)
    )
  })
})
