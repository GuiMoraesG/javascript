let nome = document.getElementById('nome')
let sobreNome = document.getElementById('sobreNome')
let peso = document.getElementById('peso')
let alt = document.getElementById('altura')
let res = document.getElementById('res')
let contador = 0
let valores = []

function clicou() {
    if (nome.value == 0 || sobreNome.value == 0 || peso.value == 0 || alt.value == 0) {
        alert('Por favor, Preencha os espaços em branco !!!')
    } else {
        valores.push(dadosPessoa(nome.value, sobreNome.value, peso.value, alt.value))
    
        res.innerHTML += `<p> ${valores[contador].nome} ${valores[contador].sobreNome} ${valores[contador].peso} ${valores[contador].alt}  </p>`
        contador++
    }
}

function dadosPessoa(nome, sobreNome, peso, alt) {
    return {
        nome,
        sobreNome,
        peso,
        alt
    }
}


