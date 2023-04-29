fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => elementosPagina(json))

function elementosPagina(json) {
    const table = document.createElement('table')
    const resultado = document.querySelector('.resultado')

    for (pessoa of json) {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }

    resultado.appendChild(table)
}