let hora = new Date()
let horaExata = hora.getHours()
let minutos = hora.getMinutes()

if(horaExata > 0 && horaExata < 12) {
    console.log(`Boa Dia, Agora são ${horaExata}:${minutos} Horas `)
} else if (horaExata < 18) {
    console.log(`Boa Tarde, Agora são ${horaExata}:${minutos} Horas `)
} else {
    console.log(`Boa Noite, Agora são ${horaExata}:${minutos} Horas `)
}
