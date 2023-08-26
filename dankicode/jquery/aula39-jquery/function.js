let r, g, b
let num = 0

$('#btnAdicionarAntes').click(function () {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $('#caixa').before("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'>" + num + "</div>")
    num++
})

$('#btnAdicionarDepois').click(function () {
    for (let i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        $('#caixa').after("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'>" + num + "</div>")
        num++
    }
})

$('#btnAdicionarTextoAntes').click(function () {
    $('#caixa2').before(" TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto  ANTES")
})

$('#btnAdicionarTextoDepois').click(function () {
    $('#caixa2').after(" TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto  DEPOIS")
})