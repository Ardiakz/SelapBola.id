/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.string('phone_num')
  } )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user')
};