const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const sequelize = new Sequelize('testes', 'root', 'Gui010300!', {
    host: 'localhost',
    dialect: 'mysql'
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})