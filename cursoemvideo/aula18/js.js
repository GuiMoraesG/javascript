var txtN = document.getElementById('num')
var txtNV = Number(txtN.value)
var valores = []
var res = document.getElementById('res')
var texto = document.createElement('option')
var box = document.getElementById('box')

function verificar() {
    if (isNumero(txtN) && !inLista(txtN, valores)) {
        valores.push(Number(txtN.value))

    } else {
        alert('Por favor, digite um número válido !!!')
    }
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