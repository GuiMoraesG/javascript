function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} `
        }
    }
}

const pessoa = criaPessoa('Guilherme', 'Moraes')

console.log(pessoa.nomeCompleto)