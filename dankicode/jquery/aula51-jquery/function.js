$('#btRolarEsq').click(() => {
    $('#texto').scrollLeft(15)
})

$('#btRolarTop').click(() => {
    $('#texto').scrollTop(150)
})

$('#btPosTop').click(() => {
    alert($('#texto').scrollTop())
})

$('#btPosLeft').click(() => {
    alert($('#texto').scrollTop())
})

$('#btResetPos').click(() => {
    $('#texto').scrollLeft(0).scrollTop(0)
})