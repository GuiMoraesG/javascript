const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato !!!!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executado na porata 3000')
})