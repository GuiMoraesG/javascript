let itens = $('.item')
let i = 0

$('#btnMudar').click(function () {
    let item = $(itens[i]).detach()
    i++

    $('#caixa2').append(item)
})

$('#btnReset').click(function () {
    for (let i = 0; i < itens.length; i++) {
        let item = $(itens[i]).detach()

        $('#caixa').append(item)
    }
    i = 0
})