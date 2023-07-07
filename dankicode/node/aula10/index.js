const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
let handle = handlebars.create({ defaultLayout: 'main' })


app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

const sequelize = new Sequelize('testes', 'root', 'Gui010300!', {
    host: 'localhost',
    dialect: 'mysql'
})

app.get('/cadatro', (req, res) => {
    res.render('formulario')
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})