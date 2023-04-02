const lista = document.getElementById('lista')
const inputText = document.getElementById('add')
const bTN = document.getElementById('botao')

bTN.addEventListener('click', function () {
    let li = criarLi(inputText)
    criarbotao(li)
    limparTexto()
})

function criarLi(texto) {
    let li = document.createElement('li')
    li.innerHTML = texto.value
    lista.appendChild(li)
    return li
}

function criarbotao(li) {
    li.innerText += ' '
    let botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class', 'apagar')
    li.appendChild(botao)
}

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})


function limparTexto() {
    inputText.value = ''
    inputText.focus()
}