const nome = window.prompt('Digite seu Nome: ')
let titulo = document.getElementById('text')

titulo.innerHTML = `Você é o ${nome} `
document.body.innerHTML += `<p> Seu nome em maiúsculo ${nome.toUpperCase()} </p> `
document.body.innerHTML += `<p> Seu nome em minusculo ${nome.toLowerCase()} </p> `
document.body.innerHTML += `<p> Seu nome tem ${nome.length} letras </p> `
document.body.innerHTML += `<p> Primeira letra do seu nome ${nome[0]}</p> `
document.body.innerHTML += `<p> Segunda letra do seu nome ${nome[1]}</p> `
document.body.innerHTML += `<p> As ultimas 3 letras do seu nome são ${nome.slice(-3)}</p> `