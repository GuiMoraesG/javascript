$('.box').click(function (e) {
    e.stopPropagation()

    $('.box').width(600)
    $('.box').height(600)

    $('.test').text('O QUADRADO ABAIXO FOI CLICADO !!!')
    $('.box').append('<p>Elemento criado pelo click do mouse</p>')

    atualiza()
})

$('body').click(function () {
    $('.box').width(500)
    $('.box').height(500)

    $('.test').text('O MOUSE SAIU DO QUADRADO ABAIXO !!!')

    atualiza()
})

function atualiza() {
    let largura = $('.box').width()
    let altura = $('.box').height()

    return $('.conteudo').text(largura, altura)
}

$('.limpar').click(() => {
    $('.box').empty()
})

atualiza()