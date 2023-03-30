const nome = ['luiz', 'tiago', 'well']

for (let valore of nome) {
    console.log(valore)
}

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
});