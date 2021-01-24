import { Users } from '../controllers/Users'

export = app => {
    app.post('/login', Users.login)
}

