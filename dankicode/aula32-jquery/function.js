$('#btnAumentar').click(function () {
    $('.caixa').animate({ width: '800px', height: '800px' }, { duration: 10000 })
})

$('#btnDiminuir').click(function () {
    $('.caixa').animate({ width: '100px', height: '100px' }, { duration: 10000 })
})

$('#btnFinalizar').click(function () {
    $('.caixa').finish()
})