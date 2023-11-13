const knex = require('knex');
const config = require('../knexfile')['development'];
// console.log(config)

const dataBase = knex(config);

module.exports = dataBase