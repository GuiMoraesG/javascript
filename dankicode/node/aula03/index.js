const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Seja bem Vindo !!!')
})

app.get('/sobre', (req, res) => {
    res.send('Pagina sobre')
})

app.get('/blog', (req, res) => {
    res.send('Pagina blog')
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})