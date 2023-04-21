function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/Banco: ${this.agencia} / ${this.conta} SALDO: R$ ${this.saldo.toFixed(2)}`)
}

function ContaCorrete(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrete.prototype = Object.create(Conta.prototype)
ContaCorrete.prototype.constructor = ContaCorrete

ContaCorrete.prototype.sacar = function (valor) {
    if (this.saldo + this.limite < valor) {
        console.log(`Saldo mais limite insuficiente: ${this.saldo} `)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function ContaPou(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPou.prototype = Object.create(Conta.prototype)
ContaPou.prototype.constructor = ContaPou

const contaCorrente1 = new ContaCorrete(11, 22, 100, 100)
contaCorrente1.sacar(200)

console.log(contaCorrente1)

console.log('--------------------------------------------------------------------------------------------------------------------------------------------')

const CP = new ContaPou(11, 22, 100)
CP.sacar(200)
console.log(CP)