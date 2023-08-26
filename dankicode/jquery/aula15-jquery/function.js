$(document).mousemove(e => {
    e.pageX

    $('p').text('Mouse X: ' + e.pageX + ' Mouse Y: ' + e.pageY)
})