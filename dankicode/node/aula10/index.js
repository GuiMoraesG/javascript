const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
let handle = handlebars.create({ defaultLayout: 'main' })
const Post = require('./models/Post')

app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cadastro', (req, res) => res.render('formulario'))

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
        .then(() => res.redirect('/'))
        .catch(() => res.send('ERRO!!'))
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})