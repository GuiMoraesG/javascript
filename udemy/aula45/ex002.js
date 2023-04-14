const pessoas = [
    { nome: 'Guilherme', idade: 20 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Lais', idade: 23 },
    { nome: 'Roberto', idade: 18 },
    { nome: 'Ryua', idade: 10 },
    { nome: 'Abigail', idade: 88 },
]

const retornaNome = pessoas.map(valor => valor.nome)
const naoRetornaNome = pessoas.map(function (valor) {
    delete valor.nome
    return valor
})

const adicionarId = pessoas.map(function (valor, indice) {
    const newObject = { ...valor }
    newObject.id = indice
    return newObject
})

console.log(adicionarId)