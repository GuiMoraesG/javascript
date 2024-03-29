const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

function Contato(body) {
    this.body = body
    this.error = []
    this.contato = null
}

Contato.prototype.registro = async function () {
    this.valida()
    if (this.error.length > 0) return

    this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = function () {
    this.cleanUp()

    if (this.body.email && !validator.isEmail(this.body.email)) this.error.push('E-mail inválido')
    if (!this.body.nome) this.error.push('Nome é um campo obrigatorio')
    if (!this.body.email && !this.body.telefone) this.error.push('O campo email ou telefone, tem que estar preenchido')
}

Contato.prototype.cleanUp = function () {
    for (let key in this.body) {
        if (typeof this.body[key] !== 'string') this.body[key] = ''
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return
    this.valida()
    if (this.error.length > 0) return
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
}

Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return
    const user = await ContatoModel.findById(id)

    return user
}

Contato.buscaPorContatos = async function () {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1 })

    return contatos
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return
    const contato = await ContatoModel.findOneAndDelete({ _id: id })

    return contato
}

module.exports = Contato