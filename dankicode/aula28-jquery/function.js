$('#btn-aumentar').click(function () {
    $('#caixa').delay(2000).animate({ width: '500px' })
})

$('#btn-diminuir').click(function () {
    $('#caixa').delay(5000).animate({ width: '200px' })
})

$('#btn-mostrar').click(function () {
    $('#caixa').delay(1000).animate({ opacity: 'toggle' })
})