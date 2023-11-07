const knex = require('../knexfile')

const orderController = {
    createSession: async (req, res) => {
        const {productId, sessionDate} = req.body

        try {
            const product = await knex('products')
            .where({id: productId, available: true})
            .first()

            if (!product) {
                return res.status(404).json({message: 'Product not found or unavailable'})
            }

            const existingSession = await knex('rent')
            .where({product_id :productId, sessionDate: sessionDate})
            .first()

            if (existingSession) {
                return res.status(409).json({message: 'Session already booked'})
            }

            const totalPrice = product.price

            const newSession = await knex('rent').insert({
                product_id: productId,
                session_date: sessionDate,
                total_price: totalPrice,
            })

            return res.status(201).json({message: 'Book successfull', sessionId: newSession[0]})
        } catch (error) {
            return res.status(500).json({message: 'An error occured'})
        }
    },
}

module.exports = orderController