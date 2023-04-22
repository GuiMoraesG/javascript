class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome
        this.sobreNome = sobreNome
    }

    falar() {
        console.log(`${this.nome} esta FALANDO`)
    }

    comer() {
        console.log(`${this.nome} esta COMENDO`)
    }

    beber() {
        console.log(`${this.nome} esta BEBENDO`)
    }
}

const p1 = new Pessoa('Guilherme', 'Moraes')

console.log(p1)
