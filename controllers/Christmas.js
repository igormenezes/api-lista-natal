const { sequelize } = require('../models')
const database = require('../models')
const Validation = require('../services/Validation')

class Christmas {
    static async create(req, res) {
        try {
            let result = await database.christmas.create(req.body)
            return res.status(200).json(await Validation.successResponse(result))
        } catch(err) {
            return res.status(500).json(await Validation.errorResponse(err))
        }
    }

    static async getAll(req, res) {
        try {
            let results = await database.christmas.findAll()
            return res.status(200).json(await Validation.successResponse(results))
        } catch(err) {
            return res.status(500).json(await Validation.errorResponse(err))
        }
    }

    static async getById(req, res) {
        try {
            let result = await database.christmas.findOne({ 
                where: {
                    id: Number(req.params.id)
                }
            })
            return res.status(200).json(await Validation.successResponse(result))
        } catch(err) {
            return res.status(500).json(await Validation.errorResponse(err))
        }
    }

    static async update(req, res) {
        try {
            const transaction = await sequelize.transaction()

            await database.christmas.update(req.body, {
                where: {
                    id: Number(req.params.id)
                }
            })

            let result = await database.christmas.findOne({
                where: {
                    id: Number(req.params.id)
                }
            })
            
            await transaction.commit()
            return res.status(200).json(await Validation.successResponse(result))
        } catch(err) {
            await transaction.rollback()
            return res.status(500).json(await Validation.errorResponse(err))
        }
    }

    static async delete(req, res) {
        try {
            let result = await database.christmas.destroy({
                where: {
                    id: Number(req.params.id)
                }
            })
            return res.status(200).json(await Validation.successResponse(result, true))
        } catch(err) {
            return res.status(500).json(await Validation.errorResponse(err))
        }        
    }
}

module.exports = Christmas