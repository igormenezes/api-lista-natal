import {Request, Response} from 'express'
import { Json } from 'sequelize/types/lib/utils'
import database from '../database/models'
import { Validation } from '../services/Validation'

export class Users {
    static async login(req: Request, res: Response): Promise<Json> {
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