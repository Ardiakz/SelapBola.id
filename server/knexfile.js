const dotenv = require('dotenv')

dotenv.config({path: './.env'})
const {db_host, db_port, db_user, db_password, db_database} = process.env

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : db_host,
      port : db_port,
      user : db_user,
      password : db_password,
      database : db_database
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
