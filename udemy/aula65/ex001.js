class Validaormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    camposValidos() {
        let valid = true

        for (let erroText of this.formulario.querySelectorAll('.error-text')) {
            erroText.remove()
        }

        for (let campos of this.formulario.querySelectorAll('.validar')) {
            let label = campos.previousElementSibling.innerHTML

            if (!campos.value) {
                this.criaErro(campos, `Campo '${label}' não pode estar em branco`)
                valid = false
            }
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.setAttribute('class', 'error-text')
        campo.insertAdjacentElement('afterend', div)
    }

    handleSubmit(e) {
        e.preventDefault()
        const campoValido = this.camposValidos()
    }
}

const formulario = new Validaormulario()