function ativarBtn() {
    $('.btn').click(e => {
        e.stopPropagation()

        $('.opacidade').fadeIn()
    })
}

function ativarClickDeSaida() {
    $('body').click(() => {
        $('.opacidade').fadeOut()
    })

    $('.formulario').click(e => {
        e.stopPropagation()
    })
}

ativarBtn()
ativarClickDeSaida()