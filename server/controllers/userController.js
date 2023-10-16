const userController = {
    reg: async(req, res) => {
        
    },
    login: async(req, res) => {
        const {username, password} = req.body
        const user = {username: "ardia", password: "1234"}
        if(username == user.username && password == user.password) {
            return res.status(200).json({message: "Logged in"})
        }
        else{
            return res.status(401).json({message: "Invalid username or password!"})
        }
    }
}

module.exports = userController