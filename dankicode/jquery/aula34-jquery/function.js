$('.btnCima').click(function () {
    $('#menus').slideUp(() => $('#msg').text('Menu Oculto'))
})

$('.btnBaixo').click(function () {
    $('#menus').slideDown(() => $('#msg').text('Menu Aberto'))
})