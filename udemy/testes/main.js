const botao = document.getElementById('botao')
let itemAdicionado = document.getElementById('add')
let bTNVerificar = document.getElementById('verificar')
let valores = []

botao.addEventListener('click', function () {
    if (numeroEntrezeroECem(itemAdicionado) && !inLista(itemAdicionado, valores)) {
        valores.push(Number(itemAdicionado.value))
        criarOption(itemAdicionado)
        limparInput()
    } else {
        alert('Valor não coerente')
    }
})

function numeroEntrezeroECem(num) {
    if (Number(num.value) >= 1 && Number(num.value) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, l) {
    if (l.indexOf(Number(num.value)) != -1) {
        return true
    } else {
        return false
    }
}

function criarOption(num) {
    let item = document.createElement('option')
    let select = document.getElementById('lista')
    item.text = `Valor ${num.value} Adicionado`
    select.appendChild(item)

    return item
}

function limparInput() {
    itemAdicionado.value = ''
    itemAdicionado.focus()
}

bTNVerificar.addEventListener('click', function () {
    const res = document.getElementById('res')
    let maior = 0
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let i in valores) {
        soma += valores[i]
        media = soma / valores.length
        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores[i]
        }
    }
    
    res.innerHTML += `Temos ${valores.length} numeros cadastrados <br>`
    res.innerHTML += `O maior valor digitado foi ${maior} <br>`
    res.innerHTML += `O menor valor digitado foi ${menor} <br>`
    res.innerHTML += `A soma dos valores digitados foi ${soma} <br>`
    res.innerHTML += `A media dos valores digitados foi ${media} <br>`
})
