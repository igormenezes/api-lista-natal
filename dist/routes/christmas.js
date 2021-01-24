"use strict";
const Christmas_1 = require("../controllers/Christmas");
const Authentication_1 = require("../middlewares/Authentication");
const Auth = new Authentication_1.Authentication();
module.exports = app => {
    app.get('/', (req, res) => res.status(200).json('Olá, bem vindo a API. Acesse o README para saber detalhes de como funciona'));
    app.get('/listar', Auth.token, Christmas_1.Christmas.getAll);
    app.get('/listar/:id', Auth.token, Christmas_1.Christmas.getById);
    app.post('/cadastrar', Auth.token, Christmas_1.Christmas.create);
    app.put('/atualizar/:id', Auth.token, Christmas_1.Christmas.update);
    app.delete('/deletar/:id', Auth.token, Christmas_1.Christmas.delete);
};
