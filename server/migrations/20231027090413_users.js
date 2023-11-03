/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.string('email').notNullable().unique()
    table.string('full_name').notNullable()
    table.string('phone_num')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};