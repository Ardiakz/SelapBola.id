/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      product_name: 'HK99',
      address: 'GG Jragem RT02/RW38, Nandan, Sariharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta 55581',
      product_img: ''
    }
  ]);
};
