let ep = $('p').toArray()
let eh = $('h4').toArray()

$('#pParaCaixa2').click(() => {
    $('#caixa2').append(ep)
    $('#caixa').append(eh)
})

$('#h4ParaCaixa2').click(() => {
    $('#caixa2').append(eh)
    $('#caixa').append(ep)
})