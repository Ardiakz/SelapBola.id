const Product = require('../migrations/20231027090611_products')

const productController = {
    getAll : async (req, res) => {
        try {
        const products = await Product.find()
        
        return res.status(200).json(products)
        } catch (error) {
        return res.status(500).json({message: 'An error occured while fetching products'})
        }
    },

    createProduct : async (req, res) => {
        const {name, rent, date, status} = req.body
        try {
         const products = await Product.create({
            name, rent, date, status
         })
            
         return res.status(200).json(products)
        } catch (error) {
         return res.status(500).json({message: 'An error occured while fetching products'})
         }
        },

    editProduct : async (req, res) => {
        const {id} = req.params
        const {name, rent, date, status} = req.body
        try {
            const patch = await Product.update({
                name, rent, date, status
            }, {where: {id: id}})

            return res.status(200).json(patch)
        } catch (error) {
            return res.status(500).json({message: 'An error occured while edit products'})
         }
        },
    deleteProduct : async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
    }

module.exports = productController