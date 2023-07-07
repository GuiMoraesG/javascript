const Sequelize = require('sequelize')
const sequelize = new Sequelize('postagens', 'root', 'Gui010300!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = { Sequelize: Sequelize, sequelize: sequelize }