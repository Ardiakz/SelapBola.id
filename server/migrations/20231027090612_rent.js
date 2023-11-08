/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('rent', (table) => {
    table.increments('id').primary()
    table.integer('product_id').unsigned()
    table.foreign('product_id').references('products.id')
    table.decimal('price').notNullable()
    table.integer('discount').defaultTo(0)
    table.date('date').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('rent')
};
