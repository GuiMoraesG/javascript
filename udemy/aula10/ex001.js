const num = window.prompt('Digite um Número: ')
let tit = document.getElementById('titulo')


tit.innerHTML = `O número digitado foi: <span>${Number(num)}</span> `
document.body.innerHTML += `Raiz quadrada ${Number(num) ** (1 / 2)} <br>`
document.body.innerHTML += `${Number(num)} é inteiro: ${Number.isInteger(Number(num))} <br>`
document.body.innerHTML += `${Number(num)} é NaN: ${Number.isNaN(Number(num))} <br>`
document.body.innerHTML += `Arredondando para Cima: ${Math.ceil(Number(num))} <br>`
document.body.innerHTML += `Arredondando para Baixo: ${Math.floor(Number(num))} <br>`
document.body.innerHTML += `Com Duas casas decimais: ${Number(num).toFixed(2)} <br>`
