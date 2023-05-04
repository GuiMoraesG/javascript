import geraSenha from "./geradores";
const resultado = document.querySelector('.resultado')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNum = document.querySelector('.chk-num')
const chkSimbolos = document.querySelector('.chk-simbolos')
const botao = document.querySelector('.gerarSenha')

export default () => {
    botao.addEventListener('click', () => {
        resultado.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNum.checked,
        chkSimbolos.checked
    )

    return senha || 'Nada selecionado'
}