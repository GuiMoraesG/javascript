const produto = {
    nome: 'Carro',
    preco: 500
}

const bolo = Object.assign({}, produto, {material: 'Porcelana'})

bolo.nome = 'Bolo'
bolo.preco = 100

console.log(bolo)