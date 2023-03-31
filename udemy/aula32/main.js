const tarefa = document.getElementById('add')
const remover = document.getElementById('remover')
const ul = document.getElementById('lista')
let itens = ul.querySelectorAll('li')

function addTarefa() {
    const li = document.createElement('li')

    li.setAttribute('id', 'item')

    ul.appendChild(li)
    ul.appendChild(criarBotao())

    li.innerHTML = `${tarefa.value}`
}

function criarBotao() {
    const botao = document.createElement('input')

    botao.setAttribute('type', 'button')
    botao.setAttribute('value', 'Deletar')
    botao.setAttribute('id', 'remover')
    botao.setAttribute('onclick', 'delet()')

    ul.appendChild(botao)

    return botao
}

function delet() {
    let itens = ul.querySelectorAll('li')
    itens[0].style.display = 'none'
}