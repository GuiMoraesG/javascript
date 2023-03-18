let tit = document.getElementById('titulo')
tit.setAttribute('class', 'bom')

let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite outro numero: ')
let soma = Number(num1) + Number(num2)

tit.innerText = `A soma dos valores digitados é: ${soma} `