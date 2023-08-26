let amazonia = $.noConflict()


amazonia("p").click(e => {
    alert(amazonia(e.currentTarget).index())
})