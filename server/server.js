const express = require("express")
const router = require("./routes/routes.js")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")

app.set("views", path.join(__dirname, "../client"))
app.use(cors())
app.use(express.static(path.join(__dirname, "../client/resources")))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }))
app.use("/", router)

module.exports = app
