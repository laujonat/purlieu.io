import { reducer, initialState } from "./reducer"
import { RECEIVE_BOUNDARIES_SUCCESS } from "./actions"

describe("boundaries reducer", () => {
  it("should RECEIVE_BOUNDARIES_SUCCESS", () => {
    const action = {
      type: RECEIVE_BOUNDARIES_SUCCESS,
      data: {
        geoLocation: {
          location: { lat: 37.766536409213685, lng: -122.40799396807859 }
        }
      }
    }
    const {
      geoLocation: { location }
    } = action.data
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      markers: [...initialState.markers, location]
    })
  })
})
