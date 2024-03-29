document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    try {
        const response = await fetch(href)
        if (response.status !== 200) throw new Error('ERROR 555!!')
        const html = await response.text()
        carregaResultado(html)
    } catch (e) {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('div.resultado')
    resultado.innerHTML = response
}