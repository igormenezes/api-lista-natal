module.exports = app => {
    const Christmas = require('../controllers/Christmas')
    app.get('/', (req, res) => res.status(200).json('Olá, bem vindo a API. Acesse o README para saber detalhes de como funciona'))
    app.get('/listar', Christmas.getAll)
    app.get('/listar/:id', Christmas.getById)
    app.post('/cadastrar', Christmas.create)
    app.put('/atualizar/:id', Christmas.update)
    app.delete('/deletar/:id', Christmas.delete)
}