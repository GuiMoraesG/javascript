const express = require('express')
const app = express()
let numero = {
    valor: Math.round(Math.random() * 10)
}


app.get('/', (req, res) => {
    res.send(JSON.stringify(numero))
})


app.listen(8001, () => {
    console.log('conectando...')
    console.log('http://localhost:8001')
})