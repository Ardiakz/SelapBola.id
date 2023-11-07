const express = require("express")
const router = express.Router()
const productController = require("../controllers").productController

router.get('/viewallitem', productController.getAll)

router.post('/additem', productController.createProduct)

router.patch('/edititem', productController.editProduct)
    
router.delete('/deleteitem', productController.deleteProduct)

module.exports = router