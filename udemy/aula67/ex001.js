function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) - min)
}

function conctarBD(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('This is not defined')

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

const promesa = [
    conctarBD('Promise 1 ', 3000),
    conctarBD('Promise 2 ', 5000),
    conctarBD('Promise 3 ', 6000),
]

// Promise.race(promesa)
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(e => {
//         console.log(e)
//     })

function baixaPagina() {
    let inCache = true

    if (inCache) {
        return Promise.resolve('Página em cache')
    } else {
        return conctarBD('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(dadosPag => {
        console.log(dadosPag)
    })
    .catch(e => {
        console.log(e)
    })