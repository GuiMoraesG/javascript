function validarForm() {
    $('.formulario').submit(e => {
        e.preventDefault()

        if (validarCampos()) alert('Login concluído')
    })
}

function validarCampos() {
    let flag = true

    let formulario = document.querySelector('.formulario')

    for (erro of formulario.querySelectorAll('.erroText')) {
        erro.remove()
    }

    for (campos of formulario.querySelectorAll('.validar')) {

        if (!campos.value) {
            mensagemErro(campos, 'Este campo precisa estar preenchido')
            flag = false
        }

        if (campos.classList.contains('nome')) if (!verificarNome(campos)) flag = false

        if (campos.classList.contains('email')) if (!verificarEmail(campos)) flag = false

        if (campos.classList.contains('senha')) if (!verificarSenha(campos)) flag = false
    }

    return flag
}

function verificarSenha(campo) {
    const Tnome = campo.value

    if (Tnome.toLowerCase() !== 'g123') {
        mensagemErro(campo, 'Senha está errado')
        return false
    }

    return true
}

function verificarEmail(campo) {
    const Tnome = campo.value

    if (Tnome.toLowerCase() !== 'gm@gmail.com') {
        mensagemErro(campo, 'E-mail está errado')
        return false
    }

    return true
}

function verificarNome(campo) {
    const Tnome = campo.value

    if (Tnome.toLowerCase() !== 'guilherme') {
        mensagemErro(campo, 'Nome está errado')
        return false
    }

    return true
}

function mensagemErro(campo, msg) {
    const div = document.createElement('div')
    div.innerText = msg
    div.setAttribute('class', 'erroText')
    campo.insertAdjacentElement('afterend', div)
}

validarForm()