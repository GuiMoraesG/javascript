let valores = [11, 5, 7, 10]
let soma = 0
let maior = valores[0]


for (let c in valores) {
    soma += valores[c]
    console.log(valores[c], soma)

    if (valores[c] > maior) {
        maior = valores[c]
    }

}



console.log(valores, soma, valores.length, maior)