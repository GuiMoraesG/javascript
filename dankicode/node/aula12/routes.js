const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/posts', (req, res) => res.send('Página Posts'))
router.get('/categorias', (req, res) => res.send('Página Categorias'))


module.exports = router