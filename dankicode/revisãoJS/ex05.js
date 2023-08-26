const jogo = {
    titulo: 'DMC',
    ano: 2020,
    criador: 'Miyazaki',
    personagem: 'Dante'
}

exibirStrings(jogo)

function exibirStrings(jogo) {
    for (let i in jogo) {
        if (typeof jogo[i] === 'string') {
            console.log(i, jogo[i])
        }
    }
}