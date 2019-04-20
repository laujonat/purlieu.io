import { testSaga } from "redux-saga-test-plan"
import { generateBoundaries, dropMarker } from "./saga"
import { receiveBoundariesSuccess, receiveBoundariesErrors } from "./actions"
import { createMarker } from "../lib/map"
import { selectCurrentCard } from "../components/PolygonList/selectors"
import { selectMap } from "../components/Map/selectors"
import api from "../services/boundaries"

describe("generateBoundaries saga", () => {
  const action = { data: { index: 0 } }
  const card = {
    amount: 10,
    location: {},
    address: "123 Fake Place",
    rideType: "lyft",
    carrier: "lyft"
  }

  // need to find a google maps mock
  const map = {
    maps: {
      LatLng: jest.fn(),
      Map: function() {
        return { addListener: jest.fn() }
      },
      event: { trigger: jest.fn() }
    }
  }

  describe("successfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesSuccess", () => {
      const boundaries = [{ lat: 123, lng: -123 }, { lat: 343.2, lng: -23.33 }]
      const marker = { setAnimation: jest.fn() }
      const { data } = action

      testSaga(generateBoundaries, action)
        .next()
        .select(selectCurrentCard, data)
        .next(card)
        .select(selectMap)
        .next(map.maps.Map)
        .call(createMarker, card.location, map.maps.Map)
        .next(marker)
        .fork(dropMarker, marker)
        .next()
        .call(api.getBoundaries, card)
        .next(boundaries)
        .put(receiveBoundariesSuccess({ marker, boundaries }))
        .next()
        .isDone()
    })
  })

  describe("unsuccessfully fetching boundaries from marker location", () => {
    it("calls receiveBoundariesError", () => {
      const marker = { setAnimation: jest.fn(), setMap: jest.fn() }
      const error = { errors: {} }
      const { data } = action
      testSaga(generateBoundaries, action)
        .next()
        .select(selectCurrentCard, data)
        .next(card)
        .select(selectMap)
        .next(map.maps.Map)
        .call(createMarker, card.location, map.maps.Map)
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
