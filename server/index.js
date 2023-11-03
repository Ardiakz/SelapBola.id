const express = require("express")
const knex = require("knex")
const PORT = 3000
const app = express()
const router = require("./routes")
const knexfile = require("./knexfile")
const userController = require("./controllers/userController")
const db = knex(knexfile.development)

app.use(express.json())

app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use("/users", router.userRoutes)

app.use("/products", router.productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

module.export = {userController, db} 