$('#btnVerde').click(() => {
    $('#caixa').css({ "background-color": "green", "color": "red" })
    alert($('#caixa').css('background-color'))
})

$('#btnVermelho').click(() => {
    $('#caixa').css({ "background": "red", "color": "blue" })

})

$('#btnAzul').click(() => {
    $('#caixa').css({ "background": "blue", "color": "green" })

})