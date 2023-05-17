$('.block').on({
    click: () => {
        $('.block').css('background', 'blue')
        $('#texto').text('Clicou no quadrado!!')
    },

    mouseout: () => {
        $('#texto').text('Fora do quadrado!!')
        $('.block').css('background', 'red')
    },

    mouseenter: () => {
        $('#texto').text('Entrou no quadrado!!')
        $('.block').css('background', 'black')
    }
})
