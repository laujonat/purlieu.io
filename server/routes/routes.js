const express = require("express")
const axios = require("axios")
const router = express.Router()
const bodyParser = require("body-parser")
const Lyft = require("lyft-node")
require("dotenv").config()

router.get("/test", (req, res) => {
  res.send(
    [{ bound: 22 }, { bound: "33" }]  
  )
}) 

router.get("/", (req, res) => {
  res.render("index")
})

router.get("/rideEstimate", (req, res) => {
  const lyft = new Lyft(
    process.env.LYFT_CLIENT_ID,
    process.env.LYFT_CLIENT_SECRET
  )

  const query = {
    start: {
      latitude: req.query.start_lat,
      longitude: req.query.start_lng
    },
    end: {
      latitude: req.query.end_lat,
      longitude: req.query.end_lng
    },
    rideType: req.query.ride_type
  }

  lyft
    .getRideEstimates(query)
    .then(result => {
      res.send(result)
    })
    .catch(error => {})
})

router.get("/snapToRoad", (req, res) => {
  axios
    .request({
      url: "https://maps.googleapis.com/maps/api/directions/",
      method: "GET",
      outputFormat: "json",
      params: {
        origin: req.query.origin,
        destination: req.query.destination,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    })
    .then(result => {
      res.send(result)
    })
    .catch(error => {})
})

module.exports = router
