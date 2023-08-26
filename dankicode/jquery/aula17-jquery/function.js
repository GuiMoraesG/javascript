$(document).on({
    click: () => { $('#res').text(event.type + ':' + event.which) },
    keydown: () => {
        $('#res').text(event.type + ':' + event.which)

        if (event.which === 13) {
            alert('Enter')
        }
    }
})

