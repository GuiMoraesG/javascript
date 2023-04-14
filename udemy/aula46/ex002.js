const pessoas = [
    { nome: 'Guilherme', idade: 20 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Lais', idade: 23 },
    { nome: 'Roberto', idade: 18 },
    { nome: 'Abigail', idade: 88 },
    { nome: 'Ryua', idade: 10 }
]

const maisVelha = pessoas.reduce(function (acumulador, valor, indice, array) {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelha)