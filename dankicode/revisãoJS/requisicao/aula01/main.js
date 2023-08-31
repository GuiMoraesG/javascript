const URL = 'http://url-teste/recebe'

// Forma Simples de consumir uma API
fetch(URL).then(res => res.json()).then(dados => console.log(dados))

// Forma Simples de enviar Dados para uma API
let dados = {
    nome: 'Guilherme',
    canal: 'Canal',
    curso: 'JS',
}

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const URL = 'http://url-teste/envia'
    fetch(URL, cabecalho)
        .then(res => res.json())
        .then(ret => {
            console.log(ret)
        })
}