$('#btn-apagar').click(function () {
    $('#caixa').toggle()
    if ($('#caixa').is(':visible')) {
        $('#btn-apagar').text('Apagar')
    } else {
        $('#btn-apagar').text('Mostrar')
    }
})
