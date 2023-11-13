const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get('/viewall', productController.getAll)

// Ini harusnya buat role admin (?)
router.post('/add', productController.createProduct)
router.patch('/edit/:id', productController.editProduct)
router.delete('/delete/:id', productController.deleteProduct)

module.exports = router