// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor
//     return acumulador
// }, 0)

//-------------------------------APENAS UM EXEMPLO-1---------------------------------------------------------

// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     if (valor % 2 == 0) {
//         acumulador.push(valor)
//     }

//     return acumulador
// }, [])

//-------------------------------APENAS UM EXEMPLO-2---------------------------------------------------------

const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2)

    return acumulador
}, [])

console.log(total)