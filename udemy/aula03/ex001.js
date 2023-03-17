const nome = 'Guilherme'
const sobreNome = 'Moraes'
const idade = 23
const peso = 90
const altura = 1.8

let data = new Date()
let ano = data.getFullYear()
let anoNascimento = ano - idade
let iMC = peso / (altura * altura)

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg tem ${altura} de alturae seu IMC é ${iMC} `)

console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento} `)