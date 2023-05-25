$('#btEach').click(() => {
    $('p').each(function () {
        alert($(this).text())
    })
})

$('#btCor').click(() => {
    $('p').each(function () {
        $(this).addClass('cor')
    })
})