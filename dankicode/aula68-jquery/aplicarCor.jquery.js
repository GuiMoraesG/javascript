$.fn.aplicarCor = function (options) {
    // This is the easiest way to have default options.
    let settings = $.extend({
        // These are the defaults.
        color: "#556b2f",
        backgroundColor: "white",
        padding: '15px'
    }, options);

    // Greenify the collection based on the settings variable.
    return this.css({
        color: settings.color,
        backgroundColor: settings.backgroundColor,
        padding: settings.padding
    });
}

