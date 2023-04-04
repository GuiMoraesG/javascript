(function () {
    const sobreNome = 'Moraes'
    function criaNome(nome) {
        return nome + ' ' + sobreNome
    }

    function falaNome() {
        console.log(criaNome('Guilherme'))
    }

    falaNome()
})()