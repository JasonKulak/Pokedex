require("dotenv").config() //get .env vars
const mongoose = require("mongoose") //imports mongoose

//establish our connection
mongoose.connect(process.env.DATABASE_URL)

//Connection Events
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("clsoe", () => {console.log("Disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

//export the mongoose object
module.exports = mongoose