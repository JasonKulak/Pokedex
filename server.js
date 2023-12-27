const express = require("express")

const pokemon = require("./models/pokemon.js")


const app = express()




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

//EDIT get
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs")
})

//CREATE post

//UPDATE put

//DESTROY delete








app.listen(3030, () => {console.log("Gotta catch em all")})