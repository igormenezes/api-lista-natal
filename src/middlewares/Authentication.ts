import {Request, Response} from 'express'
import database from '../database/models'
import passport from 'passport'
import BearerStrategy from 'passport-http-bearer'
import jwt from 'jsonwebtoken'
import auth from '../config/auth.json'

export class Authentication {
    constructor() {
        passport.use(new BearerStrategy(
            async (token, done) => {
                try {
                    let payload = jwt.verify(token, auth.secret)
                    
                    let user = await database.users.findOne({ 
                        where: {
                            id: Number(payload.id)
                        }
                    })
                    done(null, user)
                } catch(err) {
                    console.log(err.message)
                    done(err)
                }
            }
        ))
    }

    token(req: Request, res: Response, next: any): any {
        passport.authenticate('bearer', {session:false}, async (err: any, user: any, info: any) => {
            if(err) {
                return res.status(401).json({'Mensagem': 'Token expirado ou inválido!'})
            }

            return next()
        })(req, res, next)
    }
}