function exibirTipo(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) console.log(i + ' PAR')
        if (i % 2 !== 0) console.log(i + ' IMPAR')
    }
}

exibirTipo(10)