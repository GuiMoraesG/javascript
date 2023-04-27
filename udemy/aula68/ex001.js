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

async function executa() {
    try {
        const fase1 = await conctarBD('Frase 1', aleatorio(1, 4))
        console.log(fase1)
        const fase2 = await conctarBD('Frase 2', aleatorio(1, 4))
        console.log(fase2)
        const fase3 = await conctarBD('Frase 3', aleatorio(1, 4))
        console.log(fase3)
        const fase4 = await conctarBD('Frase 4', aleatorio(1, 4))
        console.log(fase4)
        console.log('TERMINAMOS NA FASE: ', fase4)
    } catch (e) {
        console.log(e)
    }
}

executa()

// conctarBD('Frase 1', aleatorio(1, 4)).then(resposta => {
//     console.log(resposta)
//     return conctarBD('Frase 2', aleatorio(1, 4)).then(resposta => {
//         console.log(resposta)
//         return conctarBD('Frase 3 ', aleatorio(1, 4)).then(resposta => {
//             console.log(resposta)
//             return conctarBD('Frase 4', aleatorio(1, 4)).then(resposta => {
//                 console.log(resposta)
//             })
//         })
//     })
// }).catch(e => {
//     console.log(e)
// })