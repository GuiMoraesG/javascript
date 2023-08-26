let r, g, b
let num = 1

$('#btnAdicionar').click(function () {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $('#caixa').append("<div id='d" + num + "' class='subcaixa' style='background-color:rgb(" + r + "," + g + ", " + b + " )'>" + num + "</div>")
    num++
})

$('#btnRemover').click(function () {
    $("#d" + (num - 1)).remove()
    num--
})

$('#btnRemoverConteudo').click(function () {
    $('#caixa').empty()
})