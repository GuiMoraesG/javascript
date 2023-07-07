const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
let handle = handlebars.create({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
})

app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts: posts })
    })
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

app.get('/deletar/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } }).then(() => res.send('Deletado!!')).catch((e) => res.send(e))
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})