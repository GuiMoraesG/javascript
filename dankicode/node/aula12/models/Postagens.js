const mongoose = require('mongoose')

const PostagensSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    slug: { type: String, required: true },
    descricao: { type: String, required: true },
    conteudo: { type: String, required: true },
    categoria: { type: mongoose.Schema.ObjectId, ref: Categoria, required: true },
    data: { type: Date, default: Date.now }
})

const PostagensModel = mongoose.model('Postagem', PostagensSchema)

class Postagem {

}

module.exports = Postagem