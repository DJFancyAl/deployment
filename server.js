// Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT


// Routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

module.exports=app;