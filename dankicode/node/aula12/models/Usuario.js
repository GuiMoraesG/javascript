const mongoose = require('mongoose')
const validator = require('validator')
const bcypt = require('bcryptjs')

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true }
})

const UsuarioModel = mongoose.model('UsuarioYT', UsuarioSchema)

class Usuario {
    constructor(body) {
        this.body = body
        this.erros = []
        this.usuario = null
    }

    async registro() {
        this.valida()
        await this.emailRegistrado()
        if (this.erros.length > 0) return

        const salt = bcypt.genSaltSync()
        this.body.senha = bcypt.hashSync(this.body.senha, salt)
        this.usuario = await UsuarioModel.create(this.body)
    }

    async emailRegistrado() {
        this.usuario = await UsuarioModel.findOne({ email: this.body.email })

        if (this.usuario) this.erros.push('E-mail já registrado !')
    }

    valida() {
        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            senha: this.body.senha,
            senha2: this.body.senha2
        }

        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')
        if (!this.body.nome) this.erros.push(`O campo "Nome" precisar estar preenchido!!`)
        if (!this.body.email) this.erros.push('O campo "E-mail" precisar estar preenchido!!')
        if (!this.body.senha) this.erros.push('O campo "Senha" precisar estar preenchido!!')
        if (!this.body.senha2) this.erros.push('O campo "Repetir Sua Senha" precisar estar preenchido!!')
        if (this.body.senha !== this.body.senha2) this.erros.push('Os campos de senha tem que ser iguais!!')
        if (this.body.senha.length < 4) this.erros.push('Sua senha tem que ter nom minimo 4 caracteres!!')
    }
}

module.exports = Usuario