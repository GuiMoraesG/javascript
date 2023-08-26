$('#btnPosition').click(() => {
    let t = $('#caixa').position().top
    let l = $('#caixa').position().left

    alert(`TOP:${t} LEFT:${l}`)
})

$('#top').change(() => {
    let valor = document.getElementById('top').value

    $('#caixa').css({ 'top': valor + 'px' })
})

$('#left').change(() => {
    let valor = document.getElementById('left').value

    $('#caixa').css({ 'left': valor + 'px' })
})