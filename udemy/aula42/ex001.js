function* gerador1() {
    // quando eu chamar essa funcão esse será o Primeiro valor a ser retornado
    yield 'valor1'
    // quando eu chamar essa funcão esse será o Segundo valor a ser retornado
    yield 'valor2'
    // quando eu chamar essa funcão esse será o Terceiro valor a ser retornado
    yield 'valor3'
}

function* gerador2() {
    let i = 0

    while (true) {
        yield i
        i++
    }
}

function* gerador3() {
    yield 0
    yield 1
    yield 2
}

function* gerador4() {
    yield* gerador3()
    yield 3
    yield 4
    yield 5
}

function* gerador5() {
    yield function () {
        console.log('Primeiro Yield')
    }

    yield function () {
        console.log('Segundo Yield')
    }
}

const g5 = gerador5()
const funct1 = g5.next().value
const funct2 = g5.next().value

funct1()
funct2()