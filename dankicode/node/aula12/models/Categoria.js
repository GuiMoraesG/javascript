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
        this.erros = []
    }

    async registro() {
        this.valida()
        if (this.erros.length > 0) return

        await CategoriaModel.create(this.body)
    }

    valida() {
        this.body = {
            nome: this.body.nome,
            slug: this.body.slug
        }

        if (!this.body.nome || !this.body.slug) this.erros.push({ texto: 'Todos os campos precisam estar preenchidos' })
        if (this.body.slug.length < 3) this.erros.push({ texto: 'O slug tem que conter mais de 3 caracteres' })
    }

    async procurarCategorias() {
        const categoria = await CategoriaModel.find().sort({ date: -1 })

        return categoria
    }

    async procurarCategoriasPelaId(id) {
        const categoria = await CategoriaModel.findById(id)

        return categoria
    }

    async editar(id) {
        this.valida()
        if (this.erros.length > 0) return

        await CategoriaModel.findByIdAndUpdate(id, this.body, { new: true })
    }

}

module.exports = Categoria