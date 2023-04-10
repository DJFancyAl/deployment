// Dependencies
require('dotenv').config()
const express = require('express')
const app = express()


// Routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})


// Listener
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})