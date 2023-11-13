const knex = require('knex')
const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'];
const database = knex(config);

//from = tabelnya mana
//where = columenya mana

let self = module.exports = {
    select : async function (table, id){
        try{
            console.log(id);
            const data = await database(table).where(id)
            // const data = await database(table).where(where)
            return data
        }catch(err){
            // console.error("====> Error select");
            throw err
        }
    },
    selectAll :  async function (table, id){
        try{
            console.log(id);
            const data = await database(table).select(id)
            // const data = await database(table).where(where)
            return data
        }catch(err){
            console.error("====> Error select");
            throw err
        }
    },
    insert : async function insert(table, data){
        try{
            // const inputData = await database('Pasien').insert(data)
            const inputData = await database(table).insert(data)
            return inputData
        }catch(err){
            console.error("====> Error inserting")
            throw err
        }
    },
    update : async function update(table, data, where){
        try{
            const updateData = await database(table).update(data).where(where)
            return updateData
        }catch(err){
            console.error("====> Error update")
            throw err
        }
    },
    delete : async function remove(table, where){
        try{
            const deleteData = await database(table).where(where).del()
            return deleteData
        }catch(err){
            console.error("====> Error delete")
            throw err
        }
    }
}