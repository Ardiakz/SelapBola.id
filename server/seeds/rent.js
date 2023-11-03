/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const now  = new Date()

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rent').del()
  await knex('rent').insert([
    {
      rent_price: 10,
      date: now,
      status: true
    }

  ]);
};
