const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
// const db = require("../models/db")

router.post("/login", userController.login)
router.post("/register", userController.register)

// viewsRouter
router.get("/register", userController.registerView)
router.get("/login", userController.loginView)

module.exports = router