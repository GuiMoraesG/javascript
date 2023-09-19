const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmpassword: { type: String, require: true },
    date: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('UserMON', UserSchema);

class User {
    constructor(body) {
        this.erros = []
        this.body = body;
    }

    async criar() {
        this.dataValidation();
        await this.emailValidation();

        if (this.erros.length > 0) { return }

        this.body.password = bcrypt.hashSync(this.body.password, 8);

        await UserModel.create({
            name: this.body.name,
            email: this.body.email,
            password: this.body.password,
        });
    }

    async login() {
        const user = await UserModel.findOne({ email: this.body.email });

        if (!user) {
            return this.erros.push('E-mail não cadastrado!')
        }

        if (!bcrypt.compareSync(this.body.password, user.password)) {
            return this.erros.push('Senha inválida')
        }

        const { _id, email } = user;
        const token = jwt.sign({ _id, email }, process.env.SECRETTOKEN, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });

        return token;
    }

    async findID(id) {
        const user = await UserModel.findById(id);

        if (!user) return 'Usuário não encontrado'

        return user;
    }

    async emailValidation() {
        const user = await UserModel.findOne({ email: this.body.email });

        if (user) { return this.erros.push('E-mail já registrado') }

        return user;
    }

    async dataValidation() {
        if (!this.body.name || !this.body.email || !this.body.password || !this.body.confirmpassword) {
            return this.erros.push('Todos os campos precisam estar preenchidos')
        }

        if (this.body.password !== this.body.confirmpassword) {
            return this.erros.push('Os campos senha preciam ser identicos')
        }
    }
}

module.exports = User;