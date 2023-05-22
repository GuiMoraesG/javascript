const cx = $('.caixa')

$('#btnAumentar').click(function () {
    cx.animate({ width: '800px', height: '800px' }, {
        duration: 10000, complete: () => {
            $('#info').text(cx.queue().length)
        }
    })
    $('#info').text(cx.queue().length)
})

$('#btnDiminuir').click(function () {
    cx.animate({ width: '100px', height: '100px' }, {
        duration: 10000, complete: () => {
            $('#info').text(cx.queue().length)
        }
    })
    $('#info').text(cx.queue().length)
})

$('#btnFinalizar').click(function () {
    cx.finish()
})