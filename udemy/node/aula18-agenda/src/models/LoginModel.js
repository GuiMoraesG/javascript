const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.error = []
        this.user = null
    }

    async registro() {
        this.valida()
        if (this.error.length > 0) return

        await this.userExist()

        if (this.error.length > 0) return

        const salt = bcrypt.genSaltSync()
        this.body.password = bcrypt.hashSync(this.body.password, salt)

        try {
            this.user = await LoginModel.create(this.body)
        } catch (e) {
            console.log(e)
        }
    }

    async userExist() {
        const user = await LoginModel.findOne({ email: this.body.email })
        if (user) this.error.push('Usuário já existe')
    }

    valida() {
        this.cleanUp()

        if (!validator.isEmail(this.body.email)) this.error.push('E-mail inválido')
        if (this.body.password.length < 3 || this.body.password.length > 50) this.error.push('Senha precisa conter entre 3 e 50 caracteres')
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') this.body[key] = ''
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login