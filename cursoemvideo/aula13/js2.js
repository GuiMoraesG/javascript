function clicou() {
    var anocliente = document.getElementById('ano')
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var idade = anoAtual - Number(anocliente.value)
    var texto = document.getElementById('calculo')

    

    texto.innerHTML = `Você está atualmente com ${idade} anos `
}