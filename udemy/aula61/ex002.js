class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome
        this.sobreNome = sobreNome
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobreNome}`
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobreNome = valor.join(' ')
    }
}

const p1 = new Pessoa('Guilherme', 'Moraes')
p1.nomeCompleto = 'Ricarso oraa'

console.log(p1)