function verificar() {
    var txtN = document.getElementById('num')
    var txtNV = Number(txtN.value)
    var valores = []

    var texto = document.createElement('option')
    var box = document.getElementById('box')

    if (txtNV.length == 0) {
        alert('Por favor, Digite um valor válido')
    } else {
        valores.push(txtNV)
        texto.text += `OK ${valores} ${valores.length} `

        box.appendChild(texto)
    }
}

