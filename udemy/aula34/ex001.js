// function qualquer() {
//     let soma = 0
//     for (let i in arguments) {
//         soma += arguments[i]
//     }
//     console.log(soma)
// }

// qualquer(1, 2, 3, 4, 5, 6, 7)

// function aBC(a, b=5, c) {
//     console.log(a + b + c)
// }

// aBC(2, undefined, 10)

function conta(operador, acumulador, ...numeros) {
    for (let i in numeros) {
        if (operador === '+') acumulador += numeros[i]
        if (operador === '-') acumulador -= numeros[i]
        if (operador === '*') acumulador *= numeros[i]
        if (operador === '/') acumulador /= numeros[i]

    }
    console.log(acumulador)
}

conta('*', 1, 20, 30, 40, 50)