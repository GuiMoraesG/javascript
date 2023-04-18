function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    // this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Guilherme', '1')
const pessoa2 = new Pessoa('Marcos', '2')

console.log(pessoa1)
console.log(pessoa2)