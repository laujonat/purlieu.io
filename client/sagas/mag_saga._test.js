// import { fetchClientLocation, fetchMarkerAddress } from "./map_saga"
// import { receiveClientLocationSuccess } from "../actions"
// import { call, put } from "redux-saga/effects"
// import api from "../services/map"

// describe("fetchClientLocation Saga", () => {
//   let generator
//   const location = { lat: 22.22, lng: -11.12 }
//   const address = "123 Hulk St"

//   beforeEach(() => {
//     generator = fetchClientLocation()
//   })

//   describe("success", () => {
//     it("returns loc object and dispatches success", () => {
//       let result = generator.next().value
//       expect(result).toEqual(call(api.getLocation))

//       result = generator.next(api.getAddress, location).value

//       expect(result).toEqual(call(api.getAddress, location))

//       const data = {
//         location,
//         address
//       }

//       result = generator.next(data).value
//       expect(result).toEqual(put(receiveClientLocationSuccess(data)))
//       expect(generator.next().done).toBeTruthy()
//     })
//   })
// })
