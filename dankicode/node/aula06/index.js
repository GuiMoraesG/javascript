const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', (req, res) => {
    res.send('Pagina sobre')
})

app.get('/blog', (req, res) => {
    res.send('Pagina blog')
})

app.get('/ola/:nome/:jogo/:musica', (req, res) => {
    res.send(`Olá ${req.params.nome}<br> Você gosta do jogo ${req.params.jogo}<br> e escuta ${req.params.musica}`)
})

app.listen(8081, () => {
    console.log('servidor ligado')
    console.log('http://localhost:8081')
})