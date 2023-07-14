const express = require('express')
const router = express.Router()
const Categoria = require('./models/Categoria')

router.get('/', (req, res) => res.render('index'))
router.get('/posts', (req, res) => res.send('Página Posts'))

router.get('/categorias', (req, res) => res.render('categorias'))
router.get('/categorias/add', (req, res) => res.render('addCategoria'))

router.post('/categorias/nova', async (req, res) => {
    const categoria = new Categoria(req.body)
    categoria.registro()
})


module.exports = router