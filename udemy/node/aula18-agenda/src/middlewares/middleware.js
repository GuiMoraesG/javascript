exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros')
    res.locals.sucesso = req.flash('sucesso')
    res.locals.user = req.session.user
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('erros', 'Necessario fazer login.')
        req.session.save(() => {
            res.redirect('/')
        })
        return
    }
    next()
}