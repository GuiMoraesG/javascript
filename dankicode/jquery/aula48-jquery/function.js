$('#btnPosition').click(() => {
    let pt = $('#caixa').position().top
    let pl = $('#caixa').position().left
    let ot = $('#caixa').offset().top
    let ol = $('#caixa').offset().left

    alert(`TOP P: ${pt} | LEFT P: ${pl} | TOP O: ${ot} | LEFT O: ${ol}`)
})

$('#top').change(() => {
    let valor = document.getElementById('top').value

    $('#caixa').offset({ 'top': valor })
})

$('#left').change(() => {
    let valor = document.getElementById('left').value

    $('#caixa').offset({ 'left': valor })
})