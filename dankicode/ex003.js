const nomes = []
nomes.push('Guilherme')
nomes.unshift('Pedro')
nomes[3] = 'maria'

const dados = {
    nome: 'Guilherme',
    idade: 23
}

dados.anoDeNascimento = 2000
dados.ola = function () {
    return `Olá tudo BOm ?`
}
dados['nome'] = 'Pedro'

console.log(typeof dados)