import { testSaga } from "redux-saga-test-plan"
import { generateBoundaries } from "./saga"
import { receiveBoundariesSuccess } from "./actions"
import api from "../services"

describe("generateBoundaries saga", () => {
  const action = {
    data: {
      amount: 10,
      address: "2300 16th St, San Francisco, CA 94103, USA",
      location: { lat: 37.766536409213685, lng: -122.40799396807859 },
      rideType: "lyft",
      carrier: "Lyft"
    }
  }
  const { data } = action
  describe("successfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesSuccess", () => {
      const boundaries = [{ lat: 123, lng: -123 }, { lat: 343.2, lng: -23.33 }]

      testSaga(generateBoundaries, action)
        .next()
        .call(api.getBoundaries, data)
        .next(boundaries)
        .put(receiveBoundariesSuccess({ ...data, boundaries }))
        .next()
        .isDone()
    })
  })
})
