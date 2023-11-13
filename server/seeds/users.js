/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const now = new Date().toISOString()

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'ardiakz',
      password: '121212',
      email: 'ardia@mail.com',
      full_name: 'Ardia Aprireo',
      phone_num: '08123456789',
      created_at: now,
      updated_at: now,
    },
    {
      username: 'dwikaayu',
      password: 'aloaloalo',
      email: 'dwika@mail.com',
      full_name: 'Dwika Ayu',
      phone_num: '08987654321',
      created_at: now, 
      updated_at: now,
    }
  ]);
};
