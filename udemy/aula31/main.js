let segundos = 0
let relogio = document.getElementById('relogio')
let timer


function getHoursFrom(segundos) {
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getHoursFrom(segundos)
    }, 1000)

}

function iniciar() {
    clearInterval(timer)
    iniciarRelogio()
}

function parar() {
    clearInterval(timer)
    relogio.style.color = 'red'
}

function zerar() {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
    relogio.style.color = 'black'
}
