$('#btnAnimar').click(function () {
    $('#caixa').animate({ left: '800px' }, { duration: 2000 })
    $('#caixa').animate({ top: '400px' }, { duration: 2000 })
    $('#caixa').animate({ left: 00 }, { duration: 2000 })
    $('#caixa').animate({ top: '50px' }, { duration: 2000 })
})

$('#btnProxima').click(function () {
    $('#caixa').stop()
})

$('#btnParar').click(function () {
    $('#caixa').stop(true, false)
})

$('#btnFim').click(function () {
    $('#caixa').stop(false, true)
})