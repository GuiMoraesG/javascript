export default class ValidaCpf {
    constructor(valorCpf) {
        this.cpfLimpo = valorCpf.replace(/\D+/g, '')
    }

    retornaCpfValido() {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false
        if(!this.cpfLimpo) return false

        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.validarDigito(cpfSemDigito)
        const digito2 = ValidaCpf.validarDigito(cpfSemDigito + digito1)
        const novoCpf = cpfSemDigito + digito1 + digito2

        return novoCpf === this.cpfLimpo
    }

    static validarDigito(cpf) {
        const cpfArray = Array.from(cpf)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (regressivo * Number(valor))
            regressivo--
            return acumulador
        }, 0)

        const digito = 11 - (total % 11)

        return digito > 9 ? '0' : String(digito)
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

}