exports.paginaInicial = (req, res) => {
    console.log(req.flash('info1'), req.flash('info2'), req.flash('info3'))
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(req.body.cliente)

    return
}