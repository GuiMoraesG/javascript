// var data = new Date()
// var hora = data.getHours()
// var min = data.getMinutes()
// var seconds = data.getSeconds()

// console.log(`Meu Nome é "GUILHERME DE MORAES GARCIA". e estou aprendendo JavaScript ás ${hora}:${min}:${seconds} Horas`)
// console.log(`Meu Nome é "GUILHERME DE MORAES GARCIA". e estou aprendendo JavaScript ás`, 10, ` Horas`)

let o = {}
o.x = 1
let p = o
p.y = 2
let q = p
q.z = 6
q.x = 3
console.log(o.x)