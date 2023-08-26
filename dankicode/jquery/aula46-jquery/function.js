

$('.btnFechar').click(function () {
    $(this).parent().addClass('ocultar')
})

$('#btnReset').click(() => {
    let itens = $('.caixa')

    for (let i = 0; i < itens.length; i++) {
        let item = $(itens[i])
        if (item.hasClass('ocultar')) {
            item.removeClass('ocultar')
        }
    }
})