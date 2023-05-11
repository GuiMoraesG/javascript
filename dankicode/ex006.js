const nomes = ['guilherme', 'pedro', 'maria', 'erica', 'larisssa']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

for (let nome in nomes) {
    console.log(nomes[nome])
}

for (let nome of nomes) {
    console.log(nome)
}