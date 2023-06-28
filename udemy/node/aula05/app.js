const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modulo/escrever')
const ler = require('./modulo/ler')
// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Gui' },
//     { nome: 'Pedro' },
//     { nome: 'Mario' },
//     { nome: 'Ricardo' },
//     { nome: 'Davi' },
// ]

// const son = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, son)

async function lerArquivos(caminho) {
    const dados = await ler(caminho)
    renderizarDados(dados)
}

function renderizarDados(dados) {
    dados = JSON.parse(dados)
    
    dados.forEach(val => console.log(val))
}

lerArquivos(caminhoArquivo)