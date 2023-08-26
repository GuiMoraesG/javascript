$('#btn-replace1').click(() => {
    $('<p>trocado</p>').replaceAll('.cor')
})

$('#btn-replace2').click((e) => {
    $('<div>' + $(e.currentTarget).text() + '</div>').replaceAll(e.currentTarget)
})

$('#btn-replace3').click(() => {
    $('.cor').replaceWith('<p>trocado</p>')
})

$('#btn-replace4').click((e) => {
    $(e.currentTarget).replaceWith('<div>' + $(e.currentTarget).text() + '</div>')
})
