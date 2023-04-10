function Pessoa(nome, sobreNome) {
    this.nome = nome,
        this.sobreNome = sobreNome

    this.metodo = function () {
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Henrique')
const p2 = new Pessoa('Guilherme', 'Moraes')
p2.metodo()

console.log(p1)