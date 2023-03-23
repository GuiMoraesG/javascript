function ola(nome) {
    return `Bom dia ${nome} `
}

let bomDia = ola('Maria')

console.log(bomDia)

// -------------------------------------------------------------------------

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}


let conta = soma(9, 5)

console.log(conta)

//------------------------------------------------------------------------------

let raiz = quadrada(9)

function quadrada(num) {
    return num ** 0.5
}

console.log(raiz)

//----------------------------------------------------------------------------------

let raiz2 = function (num) {
    return num ** 0.5
};

console.log(raiz2(9))