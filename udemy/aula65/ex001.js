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

            if (campos.classList.contains('cpf')) {
                if (!this.validaCpf(campos)) valid = false
            }

            if (campos.classList.contains('user')) {
                if (!this.validaUsuario(campos)) valid = false
            }
        }

        return valid
    }

    validaUsuario(campo) {
        let valid = true
        const usuario = campo.value

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário só pode conter letras e números')
            valid = false
        }
        return valid
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value)

        if (!cpf.retornaCpfValido()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }

        return true
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
        const senhasValidas = this.validarSenhas()

        if (campoValido && senhasValidas) {
            alert('Foi enviado')
            // this.formulario.submit()
        }
    }

    validarSenhas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const senhaRepetida = this.formulario.querySelector('.senhaRepetida')

        if (senha.value !== senhaRepetida.value) {
            valid = false
            this.criaErro(senha, 'As senhas precisam ser iguais !!')
            this.criaErro(senhaRepetida, 'As senhas precisam ser iguais !!')
        }

        if (senha.value.length < 3 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'A Senha precisa conter entre 3 e 12 caracteres')
        }

        return valid
    }
}

const formulario = new Validaormulario()