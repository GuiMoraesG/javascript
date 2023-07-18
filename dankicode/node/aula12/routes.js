const express = require('express')
const router = express.Router()
const Categoria = require('./models/Categoria')
const Postagens = require('./models/Postagens')
const Usuario = require('./models/Usuario')

router.get('/', async (req, res) => {
    const post = new Postagens()
    const p = await post.listaDePostagens()
    const categoria = new Categoria()
    const cat = await categoria.procurarCategorias()

    res.render('index', { p })
})
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


router.get('/postagens', async (req, res) => {
    const post = new Postagens()
    const p = await post.listaDePostagens()

    res.render('postagens', { posts: p })
})

router.get('/postagens/add', async (req, res) => {
    const categoria = new Categoria()
    const cat = await categoria.procurarCategorias()

    res.render('postagensAdd', { cat })
})

router.post('/postagens/nova', async (req, res) => {
    const post = new Postagens(req.body)
    await post.registro()

    if (post.erro.length > 0) {
        req.flash('erroMsg', 'Erro')
        req.session.save(() => res.redirect('back'))
        return
    }

    req.flash('successMsg', 'Nova postagem criada com sucesso!!')
    req.session.save(() => {
        res.redirect('/postagens')
        return
    })
})

router.get('/postagens/edit/:id', async (req, res) => {
    const post = new Postagens()
    const p = await post.postagemId(req.params.id)
    const categoria = new Categoria()
    const cat = await categoria.procurarCategoriasPelaId(p.categoria)

    res.render('editpostagens', { p, cat })
})

router.post('/postagens/edit', async (req, res) => {
    const post = new Postagens(req.body)
    await post.editar(req.body.id)

    req.flash('successMsg', 'Poste editada com sucesso!')
    req.session.save(() => {
        res.redirect('/postagens')
        return
    })
})

router.get('/postagens/deletar/:id', async (req, res) => {
    const post = new Postagens()
    await post.deletar(req.params.id)


    req.flash('successMsg', 'POste excluido com sucesso')
    req.session.save(() => {
        res.redirect('back')
        return
    })
})

router.get('/postagem/:titulo/:id', async (req, res) => {
    const post = new Postagens()
    const p = await post.postagemId(req.params.id)

    res.render('posts/index', { p })
})

router.get('/categoria', async (req, res) => {
    const categoria = new Categoria()
    const cat = await categoria.procurarCategorias()

    res.render('categoria', { cat })
})

router.get('/categoria/:slug', async (req, res) => {
    const post = new Postagens()
    const p = await post.postagemPeloSlug(req.params.slug)

    res.render('categoriaIndex', { p })
})

router.get('/registro', (req, res) => {
    res.render('users/registro')
})

router.post('/registro', async (req, res) => {
    const user = new Usuario(req.body)
    await user.registro()

    if (user.erros.length > 0) {
        req.flash('erroMsg', user.erros)
        req.session.save(() => {
            res.redirect('back')
            return
        })
        return
    }

    req.flash('successMsg', 'Conta criada com sucesso')
    req.session.save(() => {
        res.redirect('back')
        return
    })
})

module.exports = router