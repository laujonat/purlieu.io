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
      isFetching: true,
      errors: null
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
      isFetching: false,
      errors: null
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
      isFetching: false,
      errors: null
    })
  })

  it("should handle RECEIVE_CLIENT_LOCATION_ERROR", () => {
    const mockData = { errors: "123 Street" }
    const action = {
      type: RECEIVE_CLIENT_LOCATION_ERROR,
      errors: mockData.errors
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      errors: mockData.errors
    })
  })

  it("should handle RECEIVE_MARKER_LOCATION_ERROR", () => {
    const mockData = { errors: "junk" }
    const action = {
      type: RECEIVE_MARKER_LOCATION_ERROR,
      errors: mockData.data
    }
    expect(mapReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      errors: mockData.data
    })
  })
})
