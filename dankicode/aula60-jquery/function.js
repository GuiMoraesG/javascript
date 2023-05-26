let cx = $('#caixa1')

function atualiza() {
    $('#info').html(
        'width: ' + cx.width() + '<br>  Height: ' + cx.height() + '<br> innerWidth: ' + cx.innerWidth() + '<br> innerHeight: ' + cx.innerHeight() + '<br> outerWidth: ' + cx.outerWidth() + '<br> outerHeight: ' + cx.outerHeight() + '<br> outerWidth(true): ' + cx.outerWidth(true) + '<br> outerHeight(true): ' + cx.outerHeight(true)
    )

}

$('#btnAlterar').click(() => {
    cx.width(300)
    cx.height(350)
    atualiza()
})

atualiza()