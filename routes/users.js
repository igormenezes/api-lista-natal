module.exports = app => {
    const Users = require('../controllers/Users')
    app.post('/login', Users.login)
}