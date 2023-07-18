require('dotenv').config()
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const router = require('./routes')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado no Mongoose')).catch((e) => console.log(e))

app.use(session({
    secret: 'Segredinho',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.use((req, res, next) => {
    res.locals.successMsg = req.flash('successMsg')
    res.locals.erroMsg = req.flash('erroMsg')
    res.locals.user = req.session.usuario

    next()
})

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

app.use(router)

app.use(express.static(path.join(__dirname, 'public ')))



app.listen(8081, () => {
    console.log('Acessar http://localhost:8081')
    console.log('Conectado na porta 8081')
})