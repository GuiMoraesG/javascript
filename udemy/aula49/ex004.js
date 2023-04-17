function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}

const p1 = new Pessoa('Guilherme', 'Moraes')
const p2 = new Pessoa('Tais', 'Carla')


console.log(p2)