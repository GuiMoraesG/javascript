const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
let handle = handlebars.create({ defaultLayout: 'main' })

app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})