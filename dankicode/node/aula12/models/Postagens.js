const mongoose = require('mongoose')
const Categoria = require('./Categoria')

const PostagensSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    slug: { type: String, required: true },
    descricao: { type: String, required: true },
    conteudo: { type: String, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: Categoria, required: false },
    data: { type: Date, default: Date.now }
})

const PostagensModel = mongoose.model('Postagem', PostagensSchema)

class Postagem {
    constructor(body) {
        this.body = body
        this.erro = []
    }

    async registro() {
        this.valida()
        if (this.erro.length > 0) return

        await PostagensModel.create(this.body)
    }

    valida() {
        this.body = {
            titulo: this.body.titulo,
            slug: this.body.slug,
            descricao: this.body.descricao,
            conteudo: this.body.conteudo,
            categoria: this.body.categoria,
        }

        if (this.body.categoria == '0') this.erro.push({ texto: 'Categoria inválida, registre outra categoria!' })
        if (!this.body.titulo) this.erro.push({ texto: 'O campo Titulo tem que estar preenchido' })
        if (!this.body.slug) this.erro.push({ texto: 'O campo Slug tem que estar preenchido' })
        if (!this.body.descricao) this.erro.push({ texto: 'O campo Descrição tem que estar preenchido' })
        if (!this.body.conteudo) this.erro.push({ texto: 'O campo Conteudo tem que estar preenchido' })
    }

    async listaDePostagens() {
        const posts = await PostagensModel.find().populate('categoria')

        return posts
    }

    async postagemId(id) {
        const p = PostagensModel.findById(id)
        return p
    }

    async editar(id) {
        this.body = {
            titulo: this.body.titulo,
            slug: this.body.slug,
            descricao: this.body.descricao,
            conteudo: this.body.conteudo,
        }

        const p = await PostagensModel.findByIdAndUpdate(id, this.body, { new: true })

        return p
    }

    async deletar(id) {
        return await PostagensModel.findByIdAndDelete(id)
    }
}

module.exports = Postagem