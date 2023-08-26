exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite) {
    for (let i = 2; i <= limite; i++) {
        let primo = true

        for (let div = 2; div < i; div++) {
            if (i % div === 0) primo = false
        }

        if (primo) console.log(i)
    }
}