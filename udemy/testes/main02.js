let timer = document.getElementById('timer')
const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const zerar = document.getElementById('zerar')
let segundos = 0
let contador

function getHoursFrom(segundos) {
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function IniciarTimer() {
    contador = setInterval(function () {
        segundos++
        timer.innerHTML = getHoursFrom(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function () {
    clearInterval(contador)
    IniciarTimer()
})

parar.addEventListener('click', function () {
    clearInterval(contador)
    timer.style.color = 'red'
})

zerar.addEventListener('click', function () {
    clearInterval(contador)
    timer.innerText = '00:00:00'
    timer.style.color = 'black'
    segundos = 0
})