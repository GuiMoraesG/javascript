const db = require('./db')

const Post = db.sequelize.define('postagensTable', {
    titulo: { type: db.Sequelize.STRING },
    conteudo: { type: db.Sequelize.TEXT }
})

module.exports = Post