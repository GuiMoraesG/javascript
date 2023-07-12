const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    })
}

exports.registro = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.registro()

        if (contato.error.length > 0) {
            req.flash('erros', contato.error)
            req.session.save(() => res.redirect('back'))
            return
        }

        req.flash('sucesso', 'Contato registrado.')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
        return

    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404')

    const contato = await Contato.buscaPorId(req.params.id)

    if (!contato) return res.render('404')

    res.render('contato', { contato })
}