const produto = {
    nome: 'Carro',
    preco: 500
}

Object.defineProperty(produto, 'nome', {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))