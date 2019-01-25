export const Carriers = [
  {
    id: 0,
    carrier: "Lyft",
    key: "carrier"
  },
  {
    id: 1,
    carrier: "Uber",
    key: "carrier"
  },
  {
    id: 2,
    carrier: "Bird",
    key: "carrier"
  }
]

export const CarrierToRideTypesMap = {
  Lyft: [
    {
      id: 0,
      carrierType: "Lyft",
      key: "carrierType"
    },
    {
      id: 1,
      carrierType: "Lyft Plus",
      key: "carrierType"
    },
    {
      id: 2,
      carrierType: "Lyft Line",
      key: "carrierType"
    }
  ]
}

export const RideTypeToTitleMap = {
  lyft: "Lyft",
  lyft_plus: "Lyft Plus",
  lyft_line: "Lyft Line"
}
