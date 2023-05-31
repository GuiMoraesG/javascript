let indiceAtual = 0
let indiceMaximo = $('.slider img').length
let delay = 5000

function iniSlider() {
    for (let i = 0; i < indiceMaximo; i++) {
        if (i == 0) {
            $('.bullerts-nav').append('<span style="background-color: black"></span>')
        } else {
            $('.bullerts-nav').append('<span></span>')
        }
    }

    $('.slider img').eq(0).fadeIn()

    setInterval(() => alterbarSlider(), delay)
}

function clickSlider() {
    $('.bullerts-nav span').click(e => {
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000)
        indiceAtual = $(e.currentTarget).index()
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000)

        $('.bullerts-nav span').css('background-color', '#ccc')
        $(e.currentTarget).css('background-color', 'black')
    })
}

function alterbarSlider() {
    $('.slider img').eq(indiceAtual).stop().fadeOut(2000)

    indiceAtual += 1

    if (indiceAtual == indiceMaximo) indiceAtual = 0

    $('.bullerts-nav span').css('background-color', '#ccc')
    $('.bullerts-nav span').eq(indiceAtual).css('background-color', 'black')

    $('.slider img').eq(indiceAtual).stop().fadeIn(2000)
}

iniSlider()
clickSlider()