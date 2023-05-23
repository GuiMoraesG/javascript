let r, g, b

$('#btnAdicionar').click(function () {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $('#caixa').append("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'></div>")
})

$('#btnAdicionar5').click(function () {
    for (let i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        $("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'></div>").appendTo($('#caixa'))
    }
})