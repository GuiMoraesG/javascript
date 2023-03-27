const data = new Date()
const dia = data.getDay()
const mes = data.getMonth()
const res = document.getElementById('res')

res = criarTexto()

function criarTexto() {
    const p = document.createElement('p')
    const pai = document.getElementById('res')
    p.innerHTML = `${getDayWeak(dia)}, ${data.getDate()} de ${getMonth(mes)} de ${getYear(data)} ${getMyHours(data)}:${getMyMinutes(data)}`
    return pai.appendChild(p)
}

function getDayWeak(dia) {
    switch (dia) {
        case 0: return 'Domingo'
        case 1: return 'Segunda'
        case 2: return 'Terça'
        case 3: return 'Quarta'
        case 4: return 'Quinta'
        case 5: return 'Sexta'
        case 6: return 'Sabado'
    }
}

function getMonth(mes) {
    switch (mes) {
        case 0: return 'Janeiro'
        case 1: return 'Fevereiro'
        case 2: return 'Março'
        case 3: return 'Abril'
        case 4: return 'Maio'
        case 5: return 'Junho'
        case 6: return 'Julho'
        case 7: return 'Agosto'
        case 8: return 'Setembro'
        case 9: return 'Outubro'
        case 10: return 'Novembro'
        case 11: return 'Dezembro'
    }
}

function getYear(data) {
    const ano = data.getFullYear()
    return ano
}

function getMyHours(data) {
    const horas = data.getHours()
    return horas
}

function getMyMinutes(data) {
    const minutos = data.getMinutes()
    return minutos
}
