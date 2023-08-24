const notas = [100, 90, 80]

mediaAluno(notas)

function mediaAluno(notas) {
    let soma = 0
    notas.forEach(element => soma += element)
    let media = Math.floor(soma / notas.length)

    if (media < 59) return console.log(`${media} F`)
    if (media < 69) return console.log(`${media} D`)
    if (media < 79) return console.log(`${media} C`)
    if (media < 89) return console.log(`${media} B`)

    return console.log(`${media} A`)
}