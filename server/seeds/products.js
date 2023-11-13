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
      product_img: 'https://picsum.photos/200/300',
      available: true
    },
    {
      product_name: 'JB99',
      address: 'Lorem ipsum',
      product_img: 'https://picsum.photos/200/300',
      available: false
    },
    {
      product_name: 'Laya',
      address: 'Dolor amet',
      product_img: 'https://picsum.photos/200/300',
      available: false
    }
  ]);
};
