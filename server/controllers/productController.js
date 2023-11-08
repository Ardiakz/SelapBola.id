const knex = require('../knexfile')

const productController = {
    getAll : async (req, res) => {
        try {
        const products = await knex('products').select('*')

        return res.status(200).json(products)
        } catch (error) {
        return res.status(500).json({message: 'An error occured while fetching products'})
        }
    },

    createProduct : async (req, res) => {
        const {name, rent, date, status} = req.body
        try {
         const products = await knex('products').insert({
            name, rent, date, status
         }).returning('*')
            
         return res.status(200).json(products)
        } catch (error) {
         return res.status(500).json({message: 'An error occured while fetching products'})
         }
        },

    editProduct : async (req, res) => {
        const {id} = req.params
        const {name, rent, date, status} = req.body
        try {
            const updatedProduct = await knex('products')
                .where('id', id)
                .update({name, rent, date, status})
                .returning('*')

            return res.status(200).json(updatedProduct)
        } catch (error) {
            return res.status(500).json({message: 'An error occured while edit products'})
         }
        },
    deleteProduct : async (req, res) => {
        const {id} = req.params
        try {
            const deletedProduct = await knex('products')
            .where('id', id).del()
            return res.status(204).json()
            } catch (error) {
            return res.status(500).json({message: 'An error occured while deleting products'})
        }
    },
}

module.exports = productController