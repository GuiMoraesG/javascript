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
}

botao.addEventListener('click', function () {
    if (!inputText.value) return;
    criarTarefa(inputText.value)
})

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('botaoApagar')) {
        el.parentElement.remove()
    }
})