const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/posts', (req, res) => res.send('Página Posts'))

router.get('/categorias', (req, res) => res.render('categorias'))
router.get('/categorias/add', (req, res) => res.render('addCategoria'))


module.exports = router