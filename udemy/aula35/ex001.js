function rand(max = 5000, min = 1000) {
    const aleatorio = Math.random() * (max - min) + min
    return Math.floor(aleatorio)
}

function f1(callbalck) {
    setTimeout(function () {
        console.log('f1')
        if (callbalck) callbalck()
    }, rand())
}

function f2(callbalck) {
    setTimeout(function () {
        console.log('f2')
        if (callbalck) callbalck()
    }, rand())
}

function f3(callbalck) {
    setTimeout(function () {
        console.log('f3')
        if (callbalck) callbalck()
    }, rand())
}

f1(f1callback)

function f1callback() {
    f2(f2callback)
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('Olá Mundo')
}

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('O)lá Mundo !!!')
//         })
//     })
// })