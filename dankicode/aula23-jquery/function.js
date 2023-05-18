$('#caixa').click(
    function () {
        alert($(this).attr('id'))
        $('p').attr('class', 'vermelho')
    }
)

$('#btn-azul').click(() => {
    $('#caixa').attr('class', 'azul')
})

$('#btn-vermelho').click(() => {
    $('#caixa').attr('class', 'vermelho')
})