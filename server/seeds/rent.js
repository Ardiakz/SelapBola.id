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
      price: 500000,
      discount: 0,
      date: now
    }

  ]);
};
