const pessoa1 = new Object
pessoa1.nome = 'Guilherme'
pessoa1.sobreNome = 'Moraes'
pessoa1.idade = 23
pessoa1.falarOi = function () {
    return `${this.nome} está falando seu OI!!`
}
pessoa1.getBirthday = function () {
    const dataAtual = new Date
    const anoAtual = dataAtual.getFullYear()
    
    return anoAtual - this.idade
}

console.log(pessoa1.falarOi(), pessoa1.getBirthday())