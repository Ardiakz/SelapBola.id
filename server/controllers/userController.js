const fs = require('fs')
const bcrypt = require('bcrypt')
const path = require('path')
const knex = require('../models/db')
const dbPath = path.join(__dirname, 'path')

const userController = {
    register: async(req, res) => {
        try {
        const {username, email, password} = req.body

        if (!username || !email || !password) {
            return res.status(400).json({message: 'All fields are required'})
        }

        const usersData = await loadUsers()

        const userExists = usersData.some((user) => user.username === username || user.email === email)

        if (userExists) {
            return res.status(409).json({message: 'User already exist'})
        }

        const newUser = {
            username, email, password
        }

        usersData.push(newUser)
        await saveUsers(usersData)
        return res.status(201).json({message: 'User registerd successfully'});
        } catch (error) {
            return res.status(500).json({message: 'Register failed'})
        }
    },
    login: async(req, res) => {
        try {
            const {username, password} = req.body
            // console.log(req.body)

            const usersData = await loadUsers()
            // console.log(usersData, "testing")
            const user = usersData.find((user) => user.username === username && user.password === password)
            console.log(user)
            if(user) {
                return res.status(200).json({message: 'Logged in'})
            } else {
                return res.status(401).json({message: 'Invalid username or password!'})
            }
        } catch (error) {
            // console.log(error, "masih error 54")
            return res.status(500).json({message: 'Login failed'})
        }
    
    }}

async function loadUsers() {
    try {
        // console.log("ardi ganteng semangat dong")
        const data = await knex('users').select('*')
        // console.log(data, "iki data") 
        return data
    } catch (error) {
        console.log(error, "masih error 67")
        return [];
    }
}

async function saveUsers(usersData) {
    try {
        await knex('users').truncate()
        await knex('users').insert(usersData)
    } catch (error) {
        throw error
    }
}

module.exports = userController