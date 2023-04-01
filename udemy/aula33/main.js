const inputText = document.getElementById('add')
const botao = document.getElementById('botao')
const ul = document.getElementById('lista')

function criarLi() {
    const li = document.createElement('li')

    return li
}

inputText.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if (!inputText.value) return;
        criarTarefa(inputText.value)
    }
})

function limpaInput() {
    inputText.value = ''
    inputText.focus()
}

function criarBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'botaoApagar')
    li.appendChild(botaoApagar)
}

function criarTarefa(textoInput) {
    const li = criarLi()
    li.innerHTML = textoInput
    ul.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
    salvarTarefa()
}

botao.addEventListener('click', function () {
    if (!inputText.value) return;
    criarTarefa(inputText.value)
})

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('botaoApagar')) {
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa() {
    const liTarefas = ul.querySelectorAll('li')
    const listaDeTarefas = []

    for (let i of liTarefas) {
        let tarefaTexto = i.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefaJSON)
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}
adicionarTarefasSalvas()