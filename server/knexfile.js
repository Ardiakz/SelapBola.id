// const dotenv = require('dotenv')
require('dotenv').config()
// dotenv.config({path: './.env'})
// const {db_host, db_port, db_user, db_password, db_database} = process.env

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : process.env.db_host,
      port : process.env.db_port,
      user : process.env.db_user,
      password : process.env.db_password,
      database : process.env.db_database
    },
    seeds: {
      directory: './seeds'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
