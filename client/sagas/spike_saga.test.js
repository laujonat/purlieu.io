import { call, put } from "redux-saga/effects"
import action from "../actions/spike"
import saga from "./spike_saga"

describe("spikeSaga", () => {
    let generator;
    const api = [axios,axos.get]
    const url = "http://localhost:8000/test"
    
    beforeEach(() => {
        generator = saga();
    })
   
    describe("successfully calling test endpoint", () => {
        generator(RECEIVE_TEST)
        expect(generator.next().value).toEqual(call(api, url))
        expect(generator.next().value).toEqual(put(action.receiveTestSuccess()))
    })

    describe("unsuccessfully calling test endpoint", () => {
        generator(RECEIVE_TEST)
        expect(generator.next().value).toEqual(call(api, url))
        expect(generator.next().value).toEqual(put(action.receiveTestErrors()))
    })
})