const pessoas = [
    { nome: 'Guilherme', idade: 20 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Lais', idade: 23 },
    { nome: 'Roberto', idade: 18 },
    { nome: 'Ryua', idade: 10 },
    { nome: 'Abigail', idade: 88 },
]

const pessoasNome = pessoas.filter(obj => obj.nome.length >= 7)
const idadeAvancada = pessoas.filter(valor => valor.idade >= 50)
const terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(terminaComA)