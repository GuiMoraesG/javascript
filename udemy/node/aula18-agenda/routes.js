const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')
const { loginRequired } = require('./src/middlewares/middleware')

route.get('/', homeController.index)

route.get('/login/index', loginController.index)
route.post('/login/registro', loginController.registro)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

route.get('/contato/index', loginRequired, contatoController.index)
route.post('/contato/registro', loginRequired, contatoController.registro)
route.get('/contato/index/:id', loginRequired, contatoController.editIndex)

module.exports = route