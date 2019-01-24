import { testSaga, expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import * as matchers from "redux-saga-test-plan/matchers"
import { generateBoundaries, dropMarker } from "./saga"
import { receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import { createMarker } from "../lib/map"
import { selectCurrentCard } from "../components/PolygonList/selectors"
import { selectMap } from "../components/Map/selectors"
import api from "../services"

describe("generateBoundaries saga", () => {
  const action = { data: { index: 0 } }
  const card = {
    amount: 10,
    location: {},
    address: "123 Fake Place",
    rideType: "lyft",
    carrier: "lyft"
  }

  const map = () => {}

  describe("successfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesSuccess", () => {
      const boundaries = [{ lat: 123, lng: -123 }, { lat: 343.2, lng: -23.33 }]
      const marker = { setAnimation: jest.fn(), setMap: jest.fn() }

      return expectSaga(generateBoundaries, action)
        .provide([
          [select(selectCurrentCard), card],
          [select(selectMap), map],
          [matchers.call.fn(createMarker), marker],
          [matchers.fork.fn(dropMarker)],
          [matchers.call.fn(api.getBoundaries), boundaries],
        ])
        .put(receiveBoundariesSuccess({ marker, boundaries }))
        .run()
    })
  })

  describe("unsuccessfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesError", () => {
      const marker = { setAnimation: jest.fn(), setMap: jest.fn() }
      const error = { errors: {} }
      testSaga(generateBoundaries, action)
        .next()
        .select(selectCurrentCard, data)
        .next(card)
        .select(selectMap)
        .next(map)
        .call(createMarker, card.location, map)
        .next(marker)
        .fork(dropMarker, marker)
        .next()
        .call(api.getBoundaries, card)
        .throw(error)
        .put(receiveBoundariesErrors(error))
        .next()
        .isDone()
    })
  })
})
