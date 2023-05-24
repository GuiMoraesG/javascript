let r, g, b
let num = 0

$('#btnAdicionar').click(function () {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $('#caixa').prepend("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'>" + num + "</div>")
    num++
})

$('#btnAdicionar5').click(function () {
    for (let i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        $("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'>" + num + "</div>").prependTo($('#caixa'))
        num++
    }
})