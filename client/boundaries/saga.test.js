import { testSaga } from "redux-saga-test-plan"
import { generateBoundaries, dropMarker } from "./saga"
import { receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import { createMarker } from "../lib/map"
import api from "../services"

describe("generateBoundaries saga", () => {
  const action = {
    data: {
      amount: 13,
      address: "2300 16th St, San Francisco, CA 94103, USA",
      location: { lat: 37.766536409213685, lng: -122.40799396807859 },
      rideType: "Free",
      carrier: "FreeCar"
    }
  }

  const { data } = action

  describe("successfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesSuccess", () => {
      const boundaries = [{ lat: 123, lng: -123 }, { lat: 343.2, lng: -23.33 }]
      const marker = { setAnimation: jest.fn() }
      const map = {}
      testSaga(generateBoundaries, action)
        .next()
        .call(createMarker, data.location, data.map)
        .next(marker)
        .fork(dropMarker, marker)
        .next()
        .call(api.getBoundaries, data, marker)
        .next(boundaries)
        .put(
          receiveBoundariesSuccess({
            amount: data.amount,
            location: data.location,
            address: data.address,
            rideType: data.rideType,
            carrier: data.carrier,
            marker,
            boundaries
          })
        )
        .next()
        .isDone()
    })
  })

  describe("unsuccessfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesError", () => {
      const marker = { setAnimation: jest.fn(), setMap: jest.fn() }
      const map = {}
      const error = { errors: {} }
      testSaga(generateBoundaries, action)
        .next()
        .call(createMarker, data.location, data.map)
        .next(marker)
        .fork(dropMarker, marker)
        .next()
        .call(api.getBoundaries, data, marker)
        .throw(error)
        .put(receiveBoundariesErrors(error))
        .next()
        .isDone()
    })
  })
})
