const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

for (let i = 0; i < elementos.length; i++) {
    if (i == 0) {
        criarP()
    }
    if (i == 1) {
        criarDiv()
    }
    if (i == 2) {
        criarSection()
    }
    if (i == 3) {
        criarFooter()
    }
}

function criarP() {
    const p = document.createElement('p')
    const res = document.getElementById('res')
    p.innerHTML = 'FRASE 1'
    return res.appendChild(p)
}

function criarDiv() {
    const div = document.createElement('div')
    const res = document.getElementById('res')
    div.innerHTML = 'FRASE 2'
    return res.appendChild(div)
}

function criarSection() {
    const section = document.createElement('section')
    const res = document.getElementById('res')
    section.innerHTML = 'FRASE 3'
    return res.appendChild(section)
}

function criarFooter() {
    const footer = document.createElement('footer')
    const res = document.getElementById('res')
    footer.innerHTML = 'FRASE 4'
    return res.appendChild(footer)
}
