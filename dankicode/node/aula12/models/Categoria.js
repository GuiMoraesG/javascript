const mongoose = require('mongoose')

const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    slug: { type: String, require: true },
    date: { type: Date, default: Date.now }
})

const CategoriaModel = mongoose.model('Categoria', CategoriaSchema)

class Categoria {
    constructor(body) {
        this.body = body
    }

    async registro() {
        this.body = {
            nome: this.body.nome,
            slug: this.body.slug
        }

        await CategoriaModel.create(this.body)
    }

}

module.exports = Categoria