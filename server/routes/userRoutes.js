const express = require("express")
const router = express.Router()
const userController = require("../controllers").userController

router.get("/login", userController.login)

router.post("/register", userController.reg)

module.exports = router