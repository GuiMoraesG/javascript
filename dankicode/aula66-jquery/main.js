$(window).scroll(() => {
    $('.sessao').each(function () {
        let windowOffY = $(window).scrollTop()
        let windowHeight = $(window).height()
        let elOffY = $(this).offset().top

        if (elOffY + 30 < (windowOffY + windowHeight) && elOffY + 30 + $(this).height() > windowOffY) {
            $('a').css({ 'text-decoration': 'none' })
            let target = $(this).attr('target')
            $('.' + target).css({ 'text-decoration': 'underline' })
            return
        }
    })
})