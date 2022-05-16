const express = require('express');
const multasController = require('./controllers/MultasController')
const loginController = require('./controllers/LoginController')
const routes = express.Router();

routes.get('/Lista', multasController.buscaMultas);
routes.post('/AlteraStatus', multasController.alterarEstatus);
routes.post('/Login', loginController.login);
routes.post('/Session', loginController.session);

module.exports = routes;
