function verificarClick() {
    $('a').click(e => {
        e.preventDefault()

        let href = $(this).attr('href')
        $.ajax({
            'url': href,
            'success': function(data) {
                console.log(data)
            }
        })

    })
}

verificarClick()