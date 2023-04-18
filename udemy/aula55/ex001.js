function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (valor) {
    this.preco -= valor
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual) / 100
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') { return }
            estoque = valor
        }
    })

}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta1 = new Camiseta('Regata', 20, 'Preta')
const caneca1 = new Caneca('Caneca de café', 200, 'Porcelana', 5)

camiseta1.aumento(50)
caneca1.aumento(50)


console.log(caneca1)