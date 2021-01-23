const database = require('../models')
const Validation = require('../services/Validation')

class Users {
    static async login(req, res) {
        try{
            const result = await database.users.findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            
            if(!result) {
                throw('Usuário não encontrado ao realizar login!')
            }

            return res.status(201).json(await Validation.generateToken(result))
        } catch(err) {
            console.log(err)
            return res.status(401).json(await Validation.errorResponse(err))
        }
    }
}

module.exports = Users