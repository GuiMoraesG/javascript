require('dotenv').config
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION).then(() => console.log('Conectado no Mongoose')).catch((e) => console.log(e))

let handle = handlebars.create({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
})
app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())











app.listen(8081, () => {
    console.log('Acessar http://localhost:8081')
    console.log('Conectado na porta 8081')
})