function criaPessoa(nome, SobreNome, peso, altura) {
    return {
        nome,
        SobreNome,
        get nomeCompleto() {
            return `${this.nome} ${this.SobreNome} `
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.SobreNome = valor.join(' ')
            console.log(valor)
        },

        fala: function (assunto) {
            return `${this.nome} está falando sobre ${assunto} ${imc()} `
        },
        peso,
        altura,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Moraes', 80, 1.80)

p1.nomeCompleto = 'Leandro oliveora'
console.log(p1.nomeCompleto)