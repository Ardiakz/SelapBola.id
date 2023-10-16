const express = require("express")
const userController = require("./controllers/userController")
const PORT = 3000
const app = express()
const router = require("./routes")

app.use(express.json())

app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use("/users", router.userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

module.export = userController