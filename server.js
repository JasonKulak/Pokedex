//Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const pokemon = require("./models/pokemon.js")

//Application Object
const app = express()

//Middleware
app.use(morgan("dev"))
app.use(methodOverride("method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


//ROUTES - INDUCES

app.get("/", (req, res) => {
    res.send("Gotta catch'em all!")
})

//INDEX get
app.get("/pokemon", (req, res) => {
    //const sortedPokemon = pokemon.name.sort()
    res.render("index.ejs", {pokemon})
})

//SHOW get
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const pokemons = pokemon[id]
    res.render("show.ejs", {pokemons})
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
app.post("/", async (req, res) => {
    await pokemon.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect("/pokemon")
})

//UPDATE put

//DESTROY delete







//Server Listener
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {console.log("Gotta catch em all")})