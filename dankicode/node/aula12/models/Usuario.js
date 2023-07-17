const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true }
})

const UsuarioModel = mongoose.model('UsuarioYT', UsuarioSchema)

class Usuario {

}

module.exports = Usuario