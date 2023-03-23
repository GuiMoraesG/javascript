// let nome = 'David'

// let pessoa01 = {
//     nome: nome,
//     sobreNome: 'Moraes',
//     idade: 23,
//     sexo: 'M'
// }

// let pessoa02 = {
//     nome: 'Luiz',
//     sobreNome: 'Garcia',
//     idade: 30,
//     sexo: 'M'
// }

// console.log(pessoa01.nome)

function criaPessoa(nome, sobreNome, idade) {
    return {
        nome,
        sobreNome,
        idade
    }
}

// let nome = 'David'
let pessoa01 = criaPessoa('Guilherme', 'Moraes', 23)
let pessoa02 = criaPessoa('Paulo', 'Moraes', 23)
let pessoa03 = criaPessoa('Ricarso', 'Moraes', 23)
let pessoa04 = criaPessoa('Pedro', 'Moraes', 23)

console.log(pessoa01)