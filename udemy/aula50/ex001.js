function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        Writable: true,
        configurable: true
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            Writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            Writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('Carro', 20, 3)

console.log(p1)