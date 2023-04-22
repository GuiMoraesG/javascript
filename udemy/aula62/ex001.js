class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + 'Dispositivo já está ligado')
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + 'Dispositivo já está desligado')
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome)
        this.cor = cor
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }

    ligar() {
        console.log('Vc alterou o método LIGAR()')
    }
}

const s1 = new Tablet('Galaxy', 'preto', 'americano')
s1.ligar()
console.log(s1)