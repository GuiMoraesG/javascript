const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinusculas = () => String.fromCharCode(rand(97, 123))
const geraNum = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;^~[]{}!@#$%&*=-+()_'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]

function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    qtd = Number(qtd)

    for (let i = 0; i <= qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula())
    }

}