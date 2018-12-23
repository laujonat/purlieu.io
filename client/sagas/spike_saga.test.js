import { call, put } from "redux-saga/effects"
import action from "../actions/spike"
import {
    localHost,
    spikeSaga
} from "./spike_saga"
import axios from "axios"

describe("spikeSaga", () => {
  let generator

  const api = [axios, axios.get]
  const url = "/test"

  beforeEach(() => {
    generator = localHost()
  })

  describe("successfully calling test endpoint", () => {
    expect(generator.next().value).toEqual(call(axios.get, url))
    expect(generator.next().value).toEqual(put(action.receiveTestSuccess()))
  })

  describe("unsuccessfully calling test endpoint", () => {
    expect(generator.next().value).toEqual(call(api, url))
    expect(generator.next().value).toEqual(put(action.receiveTestErrors()))
  })
})
