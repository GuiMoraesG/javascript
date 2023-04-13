// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]
// const numMaior = []

// for (let valores in numeros) {

//     if (numeros[valores] > 10) {
//         maiorQ(numeros[valores])
//     }
// }

// function maiorQ(num) {
//     numMaior.push(num)
// }

// console.log(numMaior)

//------------------FUNÇÃO FILTER COM CALLBAK-------------------------------------------

// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

// function callBackFilter(valor) {
//     return valor > 10
// }

// const numFiltrados = numeros.filter(callBackFilter)

// console.log(numFiltrados)

//----------------------FUNÇÃO FILTER COM FUNÇÃO ANONIMA--------------------------------------------

// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

// const numFiltrados = numeros.filter(function (valor) {
//     return valor > 10
// })

// console.log(numFiltrados)

//----------------------------------FUNÇÃO FILTER COM FUNÇÃO ANONIMA E ARROW FUNCTION---------------------------------------    

// const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]
// const numFiltrados = numeros.filter(valor => valor > 10)

// console.log(numFiltrados)

//----------------------------------------------------------------------------------------------------

const numeros = [0, 1, 2, 3, 4, 10, 20, 33, 14, 35, 8, 94, 9, 19, 5, 9, 58, 74]

const numFiltrados = numeros.filter((valor, indice, array) => {
    return valor > 10
})

console.log(numFiltrados)