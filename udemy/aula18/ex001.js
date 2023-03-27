// switch (dia) {
//     case 0: dia = 'Domingo'
//         break
//     case 1: dia = 'Segunda'
//         break
//     case 2: dia = 'terça'
//         break
//     case 3: dia = 'Quarta'
//         break
//     case 4: dia = 'Quinta'
//         break
//     case 5: dia = 'Sexta'
//         break
//     case 6: dia = 'Sabado'
//         break
//     default: dia = ' '
//         break
// }
let data = new Date()
let dia = data.getDay()
let ok = diaSemana(dia)

function diaSemana(dia) {
    switch (dia) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda'
        case 2:
            return 'terça'
        case 3:
            return 'Quarta'
        case 4:
            return 'Quinta'
        case 5:
            return 'Sexta'
        case 6:
            return 'Sabado'
        default:
            return ' '
    }
}

console.log(ok)