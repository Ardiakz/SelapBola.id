const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/login", userController.login)

router.post("/register", userController.register)

router.get("/register", userController.registerView)
router.get("/login", userController.loginView)

module.exports = router