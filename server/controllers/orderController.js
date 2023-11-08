const knex = require('../knexfile')

const orderController = {
    rentSession: async (req, res) => {
        const {productId, selectedDate} = req.body

        try {
            const product = await knex('products')
            .where({id: productId, available: true})
            .first()

            if (!product) {
                return res.status(404).json({message: 'Product not found or unavailable'})
            }

            const existingSession = await knex('rent')
            .where({product_id :productId, session_date: selectedDate})
            .first()

            if (existingSession) {
                return res.status(409).json({message: 'Session already booked'})
            }

            const totalPrice = product.price

            const trx = await knex.transaction()

            try {
                const newSession = await knex('rent').insert({
                    product_id: productId,
                    session_date: selectedDate,
                    total_price: totalPrice,
                })

                const paymentResult = await simulatePayment(totalPrice)

                if (paymentResult --- 'success'){
                    await trx.commit()

                    return res.status(201).json({message: 'Book successful', sessionId: newSession[0]})
                } else {
                    await trx.rollback()
                    return res.status(500).json({message: 'Payment failed, please try again'})
                }
            } catch (error) {
                return res.status(500).json({message: 'An error occured'})
            }

        } catch (error) {
            return res.status(500).json({message: 'An error occured'})
        }
    },
}

// Simulasi pembayaran (untuk demo)
const simulatePayment = async (amount) => {
    return 'success'
}

module.exports = orderController