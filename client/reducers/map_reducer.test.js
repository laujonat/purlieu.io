import { mapReducer, initialState } from "./map_reducer"
import {
  FETCH_LOCATION,
  RECEIVE_CLIENT_LOCATION_SUCCESS,
  RECEIVE_MARKER_LOCATION_SUCCESS,
  RECEIVE_CLIENT_LOCATION_ERROR,
  RECEIVE_MARKER_LOCATION_ERROR
} from "../actions"

describe("map reducer", () => {
  it("should return the initial state", () => {
    expect(mapReducer(initialState, {})).toEqual(initialState)
  })

  it("should handle FETCH_LOCATION", () => {
    const mockData = { data: "stuff" }
    const action = {
      type: FETCH_LOCATION,
      data: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      clientLocation: "",
      isFetching: true
    })
  })

  it("should handle RECEIVE_CLIENT_LOCATION_SUCCESS", () => {
    const mockData = { data: "123 Street" }
    const action = {
      type: RECEIVE_CLIENT_LOCATION_SUCCESS,
      data: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      clientLocation: action.data,
      isFetching: false
    })
  })

  it("should handle RECEIVE_CLIENT_LOCATION_SUCCESS", () => {
    const mockData = {
      data: {
        lat: -12.333,
        lng: 11.234
      }
    }
    const action = {
      type: RECEIVE_MARKER_LOCATION_SUCCESS,
      data: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      clientLocation: action.data,
      isFetching: false
    })
  })

  it("should handle RECEIVE_CLIENT_LOCATION_ERROR", () => {
    const mockData = { data: "123 Street" }
    const action = {
      type: RECEIVE_CLIENT_LOCATION_ERROR,
      data: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false
    })
  })

  it("should handle RECEIVE_MARKER_LOCATION_ERROR", () => {
    const mockData = { data: "junk" }
    const action = {
      type: RECEIVE_MARKER_LOCATION_ERROR,
      data: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false
    })
  })
})
