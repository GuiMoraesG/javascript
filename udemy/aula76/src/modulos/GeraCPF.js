import ValidaCpf from "./validacpf";

export default class GeraCPF {
    rand(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + max))
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)

        )
    }

    geraNovoCPF() {
        const cpfSemDigito = this.rand()
        const digito1 = ValidaCpf.validarDigito(cpfSemDigito)
        const digito2 = ValidaCpf.validarDigito(cpfSemDigito + digito1)
        const novoCpf = cpfSemDigito + digito1 + digito2

        return this.formatado(novoCpf)
    }
}