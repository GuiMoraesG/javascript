let hora = new Date()
let horaExata = hora.getHours()
let minutos = hora.getMinutes()

if (horaExata > 0 && horaExata < 12) {
    console.log(`Boa Dia, Agora são ${horaExata}:${minutos} Horas `)
} else if (horaExata < 18) {
    console.log(`Boa Tarde, Agora são ${horaExata}:${minutos} Horas `)
} else {
    console.log(`Boa Noite, Agora são ${horaExata}:${minutos} Horas `)
}

const hora2 = new Date()
const horaExata2 = 18
const minutos2 = hora.getMinutes()

if (horaExata2 < 12) console.log(`Bom dia, Agora são ${horaExata2}:${minutos2} Horas`)
if (horaExata2 > 18 && horaExata2 < 18) console.log(`Bom Tarde, Agora são ${horaExata2}:${minutos2} Horas`)
if (horaExata2 >= 18 && horaExata2 < 24) console.log(`Bom Noite, Agora são ${horaExata2}:${minutos2} Horas`)