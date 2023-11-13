const express = require("express")
const knex = require("knex")
const ejs = require("ejs")
const PORT = 3000
const app = express()
const router = require("./routes")
const knexfile = require("./knexfile")
const userController = require("./controllers/userController")
const db = knex(knexfile.development)

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

// app.engine('ejs')
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

module.export = {userController, db} 