const express = require("express")
const app = express()
//const Pokemon = require("../models/pokemon.js")



//ROUTES - INDUCES

app.get("/", (req, res) => {
    res.send("Gotta catch'em all!")
})

//INDEX
// app.get("/pokemon", (req, res) => {
//     res.render("index.ejs", {Pokemon})
// })

//SHOW
// app.get("/:id", (req, res) => {
//     res.render("show.ejs", { data: Pokemon[req.params.id] })
// })









app.listen(3030, () => {console.log("Gotta catch em all")})