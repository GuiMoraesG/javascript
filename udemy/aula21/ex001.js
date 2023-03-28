const pessoa = {
    nome: 'Guilherme',
    sobreNome: 'Moraes',
    idade: 23,
    endereço: {
        rua: 'Indonésia',
        numero: 300
    }
}
const { nome, sobreNome: SN, endereço: { rua } } = pessoa

console.log(nome, SN, rua)