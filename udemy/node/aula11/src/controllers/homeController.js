exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send('Sou uma nova rota')
}