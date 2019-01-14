import axios from "axios"
import { call, put } from "redux-saga/effects"
import { testSaga } from "./test_saga"
import { receiveTestSuccess, receiveTestErrors } from "../actions/test_actions"

describe("spikeSaga", () => {
  let generator
  const url = "http://localhost:8000/test"

  beforeEach(() => {
    generator = testSaga()
  })

  it("should successfully call endpoint and ", () => {
    expect(generator.next().value).toEqual(call(axios.get, url))
    const mockResponse = { data: "test" }
    expect(generator.next(mockResponse).value).toEqual(put(receiveTestSuccess(mockResponse.data)))
    expect(generator.next().done).toBeTruthy()
  })

  it("should unsuccessfully call test endpoint", () => {
    expect(generator.next().value).toEqual(call(axios.get, url))
    const error = "failed api call"
    expect(generator.throw(error).value).toEqual(put(receiveTestErrors(error)))
    expect(generator.next().done).toBeTruthy()
  })
})
