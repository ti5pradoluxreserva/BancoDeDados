const database = require('../models')

class SetupController {
    static async pegaTodoSetup(req, res){
        try{
            const todoSetup = await database.Setup.findAll()
            return res.status(200).json(todoSetup)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = SetupController