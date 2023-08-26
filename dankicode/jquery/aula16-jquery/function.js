$(document).click(e => {
    $('#res').text("O oque foi clicado: " + e.target.tagName.toLowerCase())

    if (e.target.tagName === 'DIV') {
        $('#texto1').css('background', 'purple').trigger('click')
    }
})

$('#texto1').click(() => {
    $('#texto1').css('color', 'red')
})
