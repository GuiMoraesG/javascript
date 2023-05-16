$(function () {
    $('h1').css('text-align', 'center').css('font-size', '4rem')
    $('p').css('color', 'white').css('font-weight', 'bold').css('font-size', '3rem')

    $('.testes1').css('background', 'red').click(function () {
        $('.testes2').css('background-color', 'green')
        $('.testes2 > p').css('color', 'black').css('font-weight', 'bold').css('font-size', '2rem')
    })

    $('.testes1').css('background', 'red').hover(function () {
        $('.testes2').css('background-color', 'yellow')
        $('.testes2 > p').css('color', 'purple').css('font-weight', 'bold').css('font-size', '2rem')
    })

    $('textarea').focus(() => console.log('Dentro')).blur(() => console.log('Fora'))


})

