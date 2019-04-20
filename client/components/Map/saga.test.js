import { testSaga } from "redux-saga-test-plan"
import { fetchClientLocation, setMarkerAddress } from "./saga"

import {
  receiveClientLocationSuccess,
  receiveClientLocationErrors,
  receiveMarkerLocationSuccess,
  receiveMarkerLocationError
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
    it("calls receiveMarkerLocationSuccess", () => {
      const action = {
        data: {
          lat: 11.342,
          lng: -123.4104
        }
      }
      const location = action.data
      const address = "123 Marker Street"
      const data = {
        location,
        address
      }

      testSaga(setMarkerAddress, action)
        .next()
        .call(api.getAddress, location)
        .next(address)
        .put(receiveMarkerLocationSuccess(data))
        .next()
        .isDone()
    })
  })

  describe("unsuccessfully setting marker address", () => {
    it("calls receiveClientLocationError", () => {
      const action = {
        data: {
          lat: 11.342,
          lng: -123.4104
        }
      }
      const location = action.data
      const error = { data: {} }

      testSaga(setMarkerAddress, action)
        .next()
        .call(api.getAddress, location)
        .throw(error)
        .put(receiveMarkerLocationError(error))
        .next()
        .isDone()
    })
  })
})
