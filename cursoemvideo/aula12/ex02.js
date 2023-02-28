var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} Horas`)

if (hora >= 0 && hora <= 11) {
    console.log('Bom DIA !!!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa TARDE !!!')
} else {
    console.log('boa NOITE !!!')
}