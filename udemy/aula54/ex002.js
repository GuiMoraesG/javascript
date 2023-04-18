function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
}

Produto.prototype.desconto = function (valorDesconto) {
    this.preco = this.preco - (this.preco * valorDesconto) / 100
}

Produto.prototype.aumento = function (valorDesconto) {
    return this.preco + (this.preco * valorDesconto) / 100
}

const produto1 = new Produto('carro', 100, 25)
const produto2 = new Produto('Bolo', 10, 1)
const produto3 = new Produto('Telefone', 500000, 999)

const produto4 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(produto4, produto1)

produto1.desconto(20)
produto2.desconto(50)
produto4.desconto(50)


console.log(produto4)