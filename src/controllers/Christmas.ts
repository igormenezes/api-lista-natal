import {Request, Response} from 'express'
import { sequelize } from '../database/models'
import database from '../database/models'
import { Validation } from '../services/Validation'
import { Json } from 'sequelize/types/lib/utils'

export class Christmas {
    static async create(req: Request, res: Response): Promise<Json> {
        try {
            const result = await database.christmas.create(req.body)
            return res.status(200).json(await Validation.successResponse(result, false))
        } catch(err) {
            return res.status(400).json(await Validation.errorResponse(err))
        }
    }

    static async getAll(req: Request, res: Response): Promise<Json> {
        try {
            const results = await database.christmas.findAll()
            return res.status(200).json(await Validation.successResponse(results, false))
        } catch(err) {
            return res.status(400).json(await Validation.errorResponse(err))
        }
    }

    static async getById(req: Request, res: Response): Promise<Json> {
        try {
            const result = await database.christmas.findOne({ 
                where: {
                    id: Number(req.params.id)
                }
            })
            return res.status(200).json(await Validation.successResponse(result, false))
        } catch(err) {
            return res.status(400).json(await Validation.errorResponse(err))
        }
    }

    static async update(req: Request, res: Response): Promise<Json> {
        const transaction = await sequelize.transaction()

        try {
            await database.christmas.update(req.body, {
                where: {
                    id: Number(req.params.id)
                }
            })

            const result = await database.christmas.findOne({
                where: {
                    id: Number(req.params.id)
                }
            })
            
            await transaction.commit()
            return res.status(200).json(await Validation.successResponse(result, false))
        } catch(err) {
            await transaction.rollback()
            return res.status(400).json(await Validation.errorResponse(err))
        }
    }

    static async delete(req: Request, res: Response): Promise<Json> {
        try {
            const result = await database.christmas.destroy({
                where: {
                    id: Number(req.params.id)
                }
            })
            return res.status(200).json(await Validation.successResponse(result, true))
        } catch(err) {
            return res.status(400).json(await Validation.errorResponse(err))
        }        
    }
}