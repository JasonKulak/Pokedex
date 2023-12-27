const express = require("express")

const pokemon = require("./models/pokemon.js")
//let sortedPokemon = pokemon.sort()

const app = express()

//ROUTES - INDUCES

app.get("/", (req, res) => {
    res.send("Gotta catch'em all!")
})

//INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon})
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const pokemons = pokemon[id]
    
    res.render("show.ejs", {pokemons})
})









app.listen(3030, () => {console.log("Gotta catch em all")})