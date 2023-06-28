const animal = require('./mod1')
const ani = new animal('gato')
const path = require('path')

console.log(ani.latir())

console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imgs'))