const mongoose = require('mongoose')

const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    slug: { type: String, require: true },
    date: { type: Date, default: Date.now }
})

const CategoriaModel = mongoose.model('Categoria', CategoriaSchema)