var txtN = document.getElementById('num')
var valores = []
var res = document.getElementById('res')
var texto = document.createElement('option')
var box = document.getElementById('box')

function verificar() {
    if (isNumero(txtN) && !inLista(txtN, valores)) {
        valores.push(Number(txtN.value))
        var item = document.createElement('option')
        item.text += `O valor ${txtN.value} foi adicionado `
        box.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Por favor, digite um número válido !!!')
    }

    txtN.value = ''
    txtN.focus()
}

function isNumero(N1) {
    if (Number(N1.value) >= 1 && Number(N1.value) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n.value)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, adicionar valores !!!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>A quantidade de valores digitados foram ${tot} </p>`
        res.innerHTML += `<p>O menor valor digitado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores digitado é ${soma} </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media} </p>`

    }
}