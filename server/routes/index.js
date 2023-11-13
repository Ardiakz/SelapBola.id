const routes = require('express').Router()
const userRoutes = require("./userRoutes")
// const productRoutes = require("./productRoutes")
// const orderRoutes = require("./orderRoutes")
const homeController = require("../controllers/homeController")

routes.get("/", homeController.renderHome)
routes.use("/users", userRoutes)

module.exports = routes