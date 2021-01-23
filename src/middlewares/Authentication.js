const database = require('../models')
const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const jwt = require('jsonwebtoken')
const auth = require('../config/auth.json')

class Authentication {
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

    token(req, res, next) {
        passport.authenticate('bearer', {session:false}, async (err, user, info) => {
            if(err) {
                return res.status(401).json({'Mensagem': 'Token expirado ou inválido!'})
            }

            return next()
        })(req, res, next)
    }
}

module.exports = Authentication

