import { testSaga } from "redux-saga-test-plan"
import { fetchClientLocation } from "./saga"

import {
  receiveClientLocationSuccess,
  receiveClientLocationErrors
} from "./actions"
import api from "../../services/map"

describe("fetchClientLocation saga", () => {
  describe("successfully fetching client location", () => {
    it("calls receiveClientLocationSuccess", () => {
      const location = { lat: 122.222, lng: -12.333 }
      const address = "123 Street"
      testSaga(fetchClientLocation)
        .next()
        .call(api.getLocation)
        .next(location)
        .call(api.getAddress, location)
        .next(address)
        .put(receiveClientLocationSuccess({ location, address }))
        .next()
        .isDone()
    })
  })

  describe("unsuccessfully fetching client location", () => {
    it("calls receiveClientLocationErrors", () => {
      const location = { lat: 122.222, lng: -12.333 }
      const error = { errors: {} }
      testSaga(fetchClientLocation)
        .next()
        .call(api.getLocation)
        .next(location)
        .call(api.getAddress, location)
        .throw(error)
        .put(receiveClientLocationErrors(error))
        .next()
        .isDone()
    })
  })

  describe("successfully setting marker address", () => {
    it("calls receiveClientLocationSuccess", () => {})
  })

  describe("unsuccessfully setting marker address", () => {
    it("calls receiveClientLocationSuccess", () => {})
  })
})
