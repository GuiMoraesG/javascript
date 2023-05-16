$(function () {
    let timer

    $('a').click(function (e) {
        e.preventDefault()
    })

    $(window).resize(() => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            location.href = 'http://127.0.0.1:5500/aula09-jquery/'
        }, 1000)
    })
})
