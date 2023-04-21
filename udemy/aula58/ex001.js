const falar1 = {
    falarOi() {
        console.log(`${this.nome} está falando OI`)
    }
}

const falar2 = {
    falarTchau() {
        console.log(`${this.nome} está falando TCHAU`)
    }
}

const falar3 = {
    falarAdeus() {
        console.log(`${this.nome} está falando ADEUS`)
    }
}

const pessoaPrototype = Object.assign({}, falar1, falar2, falar3)

function criaPessoa(nome, sobreNome, idade) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobreNome: { value: sobreNome },
        idade: { value: idade }
    })
}

const p1 = criaPessoa('Guilherme', 'Moraes', 23)

console.log(p1)