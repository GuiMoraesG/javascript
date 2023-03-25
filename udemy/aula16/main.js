let peso = document.getElementById('peso')
let alt = document.getElementById('alt')
let res = document.getElementById('res')

function clicou() {
    if (peso.value == 0 || alt.value == 0) {
        res.innerHTML = `<p>Valor Inválido</p>`
    } else {
        let IMC = calculoImc(peso, alt)

        if (IMC < 18.5) {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso) </p>`
        } else if (IMC < 24.9) {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Peso Normal) </p>`
        } else if (IMC < 29.9) {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Sobre Peso) </p>`
        } else if (IMC < 34.9) {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1) </p>`
        } else if (IMC < 39.9) {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2) </p>`
        } else {
            res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3) </p>`
        }
    }
}

function calculoImc(p, a) {
    return Number(p.value) / (Number(a.value) * Number(a.value))
}
