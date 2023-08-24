function Endereco(rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade
    this.cep = cep

    this.exibirEndereco = () => {
        return this.rua + this.cidade + this.cep
    }
}

const end1 = new Endereco('rua', 'Santo André', '000-0000')
const end2 = new Endereco('rua2', 'Santo André2', '222-2222')

console.log(end1.exibirEndereco())