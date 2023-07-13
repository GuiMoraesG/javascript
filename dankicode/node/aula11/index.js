require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado')).catch((e) => console.log(e))

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, require: true },
    idade: { type: Number }
})

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema)

UsuarioModel.create({
    nome: 'guilherme',
    sobrenome: 'moraes',
    email: 'gui@gmail.com',
    idade: 23
})