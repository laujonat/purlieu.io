import { testSaga } from "redux-saga-test-plan"
import { handleLocationChange } from "./saga"
import { FETCH_LOCATION } from "./actions"

describe("handleLocationChange saga", () => {
  it("calls handleLocationChange()", () => {
    testSaga(handleLocationChange)
      .next()
      .put({ type: FETCH_LOCATION })
      .next()
      .isDone()
  })
})

describe("fetchClientLocation saga", () => {
  describe("successfully fetching client location", () => {
    it("calls receiveClientLocationSuccess", () => {})
  })

  describe("unsuccessfully fetching client location", () => {
    it("calls receiveClientLocationErrors", () => {})
  })
})
