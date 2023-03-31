// função que recebe 2 numeros e retorne o maior.

const maiorMenor2 = (x, y) => x > y ? x : y;

function maiorMenor(x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}

console.log(maiorMenor2(15, 10))