$('.box').click(function () {
    $('.box').width(600)
    $('.box').height(600)

    atualiza()
})

$('.box').mouseout(function () {
    $('.box').width(500)
    $('.box').height(500)

    atualiza()
})

function atualiza() {
    let largura = $('.box').width()
    let altura = $('.box').height()

    return $('.conteudo').text(largura, altura)
}

atualiza()