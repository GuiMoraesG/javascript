$('#btn-aumentar').click(function () {
    $('#caixa').animate({
        width: '500px',
        height: '500px'
    }, { duration: 3000 })
})

$('#btn-diminuir').click(function () {
    $('#caixa').animate({ width: '200px' }, { duration: 2000 }).animate({ height: '200px' }, { duration: 2000 })
})

$('#btn-esquerda').click(function () {
    $('#caixa').animate({
        left: '500px',
    }, { duration: 200, complete: () => alert('Movimentação terminou !!!') })
})

$('#btn-direita').click(function () {
    $('#caixa').animate({
        left: '0px',
    }, { duration: 200 })
})
