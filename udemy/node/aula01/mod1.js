// const nome = 'Gui'
// const sobreNome = 'Moraes'

// const falaOi = () => `${nome} ${sobreNome} está te falando Oi!! `

// // module.exports.nome = nome
// // module.exports.sobreNome = sobreNome

// exports.nome = nome
// exports.sobreNome = sobreNome
// exports.falaOi = falaOi

class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome
        this.sobreNome = sobreNome
    }

    falaNome() {
        return `${this.nome} ${this.sobreNome} está te falando Oi!! `
    }
}

exports.Pessoa = Pessoa