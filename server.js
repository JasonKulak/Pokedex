//Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const Pokemon = require("./models/pokemon.js")

//Application Object
const app = express()

//Middleware
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))



//ROUTES - INDUCES

//INDEX get
app.get("/pokemon", (req, res) => {
   //console.log("Hello Jason")
    res.render("index.ejs", {data: Pokemon})
})

//SHOW get
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const pokemon = Pokemon[id]
    res.render("show.ejs", {pokemon, id})
})

//NEW get
app.get("/new", (req, res) => {
    res.render("new.ejs")
})

//EDIT get
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs")
})

//CREATE post
app.post("/pokemon", (req, res) => {
    //pokemon.create(req.body).catch((error) => errorHandler(error, res))
    const body = req.body
    Pokemon.push(body)
    res.redirect("/pokemon")
})

//UPDATE put

//DESTROY delete
app.delete("/pokemon/:id", (req, res) => {
    //let deletedPokedmon = Pokemon.findByIdAndDelete(req.params.id)
    const id = req.params.id
    Pokemon.splice(id, 1)
    //console.log("code working")
    res.redirect("/pokemon")
})







//Server Listener
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {console.log("Gotta catch em all")})