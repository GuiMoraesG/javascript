function criaCalculadora() {
    return {
        display: document.querySelector('input#display'),

        clearDisplay() {
            this.display.value = ''
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        doCont() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta Inválida')
                    return
                }

                this.display.value = conta
            } catch (e) {
                alert('Conta Inválida')
                return
            }
        },

        inicia() {
            this.cliqueBotoes()
            this.enter()
        },

        enter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.doCont()
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.delOne()
                }

                if (el.classList.contains('btn-eq')) {
                    this.doCont()
                }

                this.display.focus();
            })

        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()