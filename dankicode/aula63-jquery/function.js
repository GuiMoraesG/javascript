$('.formulario').submit(e => {
    e.preventDefault()

    const nome = $('#nome').val()
    const email = $('#email').val()
    const senha = $('#senha').val()

    $('.container').append(`<p>Nome digitado: ${nome}</p> <p>E-mail digitado: ${email}</p> <p>Senha Digitada: ${senha}</p>`)
})