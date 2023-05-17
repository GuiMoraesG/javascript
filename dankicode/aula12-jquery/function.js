$('#texto').text('OLá MUundo !!!')

$('.block').click(() => {
    $('.block').css('background', 'blue')
    $('#texto').text('Clicou no quadrado')
})

$('.block').mouseenter(() => {
    $('.block').css('background', 'black')
    $('#texto').text('Entrou no quadrado')
})

$('.block').mouseout(() => {
    $('.block').css('background', 'red')
    $('#texto').text('Saiu do quadrado')
})