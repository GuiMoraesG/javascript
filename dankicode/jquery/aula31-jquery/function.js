$('.itemMenu').mouseover(function () {
    $(this).fadeTo(200, 0.3)
})

$('.itemMenu').mouseout(function () {
    $(this).fadeTo(200, 1)
})

$('#menujquery').click(function () {
    $('#submenu-jquery').fadeToggle().css('display', 'flex')
})

$('#menucanvas').click(function () {
    $('#submenu-canvas').fadeToggle().css('display', 'flex')
})

$('#menupython').click(function () {
    $('#submenu-python').fadeToggle().css('display', 'flex')
})

$('#menuarduino').click(function () {
    $('#submenu-arduino').fadeToggle().css('display', 'flex')
})