module.exports = app => {
    const Christmas = require('../controllers/Christmas')
    const Authentication = require('../middlewares/Authentication')
    const Auth = new Authentication();
    
    app.get('/', (req, res) => res.status(200).json('Olá, bem vindo a API. Acesse o README para saber detalhes de como funciona'))
    app.get('/listar', Auth.token, Christmas.getAll)
    app.get('/listar/:id', Auth.token, Christmas.getById)
    app.post('/cadastrar', Auth.token, Christmas.create)
    app.put('/atualizar/:id', Auth.token, Christmas.update)
    app.delete('/deletar/:id', Auth.token, Christmas.delete)
}