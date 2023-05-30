function verificarClique() {
    $('a').click(e => {
        e.preventDefault()

        let href = $(this).attr('href')

        $.ajax({
            'beforeSend': function () {
                console.log('aqui')
            },
            'url': href
        }).done(function (data) {
            $('#container').html(data)
        })
    })
}


verificarClique()