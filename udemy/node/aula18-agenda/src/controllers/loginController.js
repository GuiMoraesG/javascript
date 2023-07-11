// const { async } = require('regenerator-runtime')
const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.registro = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.registro()

        if (login.error.length > 0) {
            req.flash('erros', login.error)
            req.session.save(() => {
                return res.redirect('back')
            })
            return
        }

        req.flash('sucesso', 'Seu Usuário foi criado com sucesso')
        req.session.save(() => {
            return res.redirect('back')
        })

    } catch (e) {
        console.log(e)
        return res.render('404')
    }



}