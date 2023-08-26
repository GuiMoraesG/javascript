let elementosP = $('p')

$('#btPacote').click(() => {
    if (elementosP.parent().is('div')) {
        elementosP.unwrap()
    } else {
        elementosP.wrap('<div class="pacote"></div>')
    }
})

$('#btEmpacotarTudo').click(() => {
    if (elementosP.parent().is('div')) {
        elementosP.unwrap()
    } else {
        elementosP.wrapAll('<div class="pacote"></div>')
    }
})

$('#btEmpacotarDepois').click(() => {
    if (elementosP.parent().is('div')) {
        elementosP.unwrap()
    } else {
        elementosP.wrapInner('<div class="pacote"></div>')
    }
})