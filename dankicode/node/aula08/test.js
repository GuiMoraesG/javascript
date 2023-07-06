const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes', 'root', 'Gui010300!', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: { type: Sequelize.STRING },
    conteudo: { type: Sequelize.TEXT }
})

Postagem.create({
    titulo: "titulo de teste",
    conteudo: "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
})

const Usuario = sequelize.define('usuarios', {
    nome: { type: Sequelize.STRING },
    sobrenome: { type: Sequelize.STRING },
    idade: { type: Sequelize.INTEGER },
    email: { type: Sequelize.STRING }
})

Usuario.create({
    nome: 'Guilherme',
    sobrenome: 'Moraes',
    idade: 23,
    email: 'gui@gmail.com'
})