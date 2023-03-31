function mostarHora() {
    let hora = new Date()

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostarHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 10000)