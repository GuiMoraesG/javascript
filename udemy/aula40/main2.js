function Calculadora() {
    this.display = document.querySelector('input#display')

    this.inicia = () => {
        this.capturaCliques()
        this.botaoEnter()
    }

    this.botaoEnter = () => {
        document.addEventListener('keyup', e => {

            if (e.keyCode === 13) {
                this.botaoDeIgual()
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) this.addNumeroDisplay(el.innerText)
            if (el.classList.contains('btn-del')) this.deletaNumDisplay()
            if (el.classList.contains('btn-clear')) this.clearNumDisplay()
            if (el.classList.contains('btn-eq')) this.botaoDeIgual()
        })
    }

    this.addNumeroDisplay = valor => {
        this.display.value += valor
        this.display.focus()
    }

    this.deletaNumDisplay = () => this.display.value = this.display.value.slice(0, -1)

    this.clearNumDisplay = () => this.display.value = ''

    this.botaoDeIgual = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if (!conta) {
                alert('Conta Inválida')
                return
            }
        } catch (e) {
            alert('Conta Inválida')
            return
        }

        this.display.value = conta
    }

}

const calculadora = new Calculadora()
calculadora.inicia()