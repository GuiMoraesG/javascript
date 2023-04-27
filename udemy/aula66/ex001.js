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

conctarBD('Frase 1', aleatorio(1, 4)).then(resposta => {
    console.log(resposta)
    return conctarBD('Frase 2', aleatorio(1, 4)).then(resposta => {
        console.log(resposta)
        return conctarBD('Frase 3 ', aleatorio(1, 4)).then(resposta => {
            console.log(resposta)
            return conctarBD(222, aleatorio(1, 4)).then(resposta => {
                console.log(resposta)
            })
        })
    })
}).catch(e => {
    console.log(e)
})