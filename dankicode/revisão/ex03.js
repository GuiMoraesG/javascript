function medidorDeVelocidade(velocidade) {
    const maximo = 70
    let pontos = Math.floor((velocidade - maximo) / 5)
    if (velocidade <= maximo) return 'Velocidade está dentro do recomendado'


    return pontos > 5 ? `Carteira Suspensa, você recebeu "${pontos} pontos"` : `Você recebeu ${pontos} pontos`
}

console.log(medidorDeVelocidade(76))