export const Carriers = [
  {
    key: "carrier",
    value: "Lyft"
  }
]

export const CarrierToRideTypesMap = {
  Lyft: [
    {
      key: "rideType",
      value: "Lyft"
    },
    {
      key: "rideType",
      value: "Lyft Plus"
    },
    {
      key: "rideType",
      value: "Lyft Line"
    }
  ]
}

export const RideTypeToTitleMap = {
  Lyft: "lyft",
  "Lyft Plus": "lyft_plus",
  "Lyft Line": "lyft_line"
}

export const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)
