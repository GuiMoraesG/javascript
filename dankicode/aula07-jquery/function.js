$(function () {
    $('.testes').css('background', 'red')
    $('p').css('color', 'white').css('font-weight', 'bold').css('font-size', '3rem')

    setTimeout(function () {
        $('p').css('background-color', 'black')
    }, 2000)
})

// const p = document.querySelector('p')

// function mudarBack() {
//     setTimeout(function () {
//         p.style.background = 'white'
//     }, 2000)
// }

// mudarBack()