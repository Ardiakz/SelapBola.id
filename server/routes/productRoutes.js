const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get('/viewall', productController.getAll)

// Ini harusnya buat role admin (?)
router.post('/lapangan/add', productController.createProduct)
router.patch('/lapangan/edit/:id', productController.editProduct)
router.delete('/lapangan/delete/:id', productController.deleteProduct)

module.exports = router