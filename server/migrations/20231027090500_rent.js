/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('rent', (table) => {
    table.increments('id').primary()
    // table.string('name').notNullable()
    table.decimal('rent_price').notNullable()
    table.string('date')
    table.boolean('status').defaultTo(true)
    // table.string('product_img')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('rent')
};
