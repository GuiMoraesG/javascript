const express = require('express')
const router = express.Router()
const Categoria = require('./models/Categoria')

router.get('/', (req, res) => res.render('index'))
router.get('/posts', (req, res) => res.send('Página Posts'))

router.get('/categorias', async (req, res) => {
    const categoria = new Categoria()
    const cat = await categoria.procurarCategorias()

    res.render('categorias', { categorias: cat })
})

router.get('/categorias/add', (req, res) => res.render('addCategoria'))

router.post('/categorias/nova', async (req, res) => {
    const categoria = new Categoria(req.body)
    await categoria.registro()

    if (categoria.erros.length > 0) {
        req.flash('erroMsg', 'Houve um erro para cadastrar a categoria')
        res.render('addCategoria', { erros: categoria.erros })
        return
    }

    req.flash('successMsg', 'Categoria Registrada com Sucesso!')
    return res.redirect('/categorias')
})

router.get('/categorias/edit/:id', async (req, res) => {
    const categoria = new Categoria()
    const cat = await categoria.procurarCategoriasPelaId(req.params.id)

    res.render('editCategorias', { cat })
})

router.post('/categorias/edit', async (req, res) => {
    const categoria = new Categoria(req.body)
    await categoria.editar(req.body.id)

    if (categoria.erros.length > 0) {
        req.flash('erroMsg', 'Categoria não conseguiu ser editada')
        res.redirect('/categorias')
        return
    }

    req.flash('successMsg', 'Categoria editada com sucesso!')
    res.redirect('/categorias')
})

router.post('/categorias/deletar', async (req, res) => {
    const categoria = new Categoria()
    await categoria.deletarCategoria(req.body)

    req.flash('successMsg', 'Categoria deletada com sucesso!')
    res.redirect('/categorias')
})


router.get('/postagens', (req, res) => {
    res.render('postagens')
})

router.get('/postagens/add', async (req, res) => {
    const categoria = new Categoria()
    const cat = await categoria.procurarCategorias()

    res.render('postagensAdd', { cat })
})

module.exports = router