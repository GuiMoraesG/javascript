const express = require('express')
const { randomUUID } = require('crypto')
const app = express()

app.use(express.json())

const produtos = []

app.post('/products', (req, res) => {
    const { name, price } = req.body
    const produto = {
        name,
        price,
        id: randomUUID()
    }

    produtos.push(produto)

    return res.json(produto)
})

app.get('/products', (req, res) => {
    return res.json(produtos)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const produto = produtos.find(produto => produto.id === id)

    return res.json(produto)
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    const produtoIndex = produtos.findIndex(produto => produto.id === id)
    produtos[produtoIndex] = {
        ...produtos[produtoIndex],
        name,
        price
    }

    return res.json({ produto: "Produto Alterado!" })
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    const produtoIndex = produtos.findIndex(produto => produto.id === id)

    produtos.splice(produtoIndex, 1)

    return res.json({ produto: 'Produto removido com sucesso!!' })
})

app.listen(4001, () => console.log('Servidor ligado na Porta: http://localhost:4001'))