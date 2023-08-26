$('#btnVerde').click(() => {
    $('#caixa').removeClass('azul')
    $('#caixa').removeClass('vermelho')
    $('#caixa').addClass('verde')
})

$('#btnVermelho').click(() => {
    $('#caixa').removeClass('azul')
    $('#caixa').removeClass('verde')
    $('#caixa').addClass('vermelho')
})

$('#btnAzul').click(() => {
    $('#caixa').removeClass('vermelho')
    $('#caixa').removeClass('verde')
    $('#caixa').addClass('azul')
})