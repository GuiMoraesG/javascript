class Produtos {
    constructor() {
        this.carrinho = document.querySelector('.carrinho')
        this.quantidadeItem1 = 0
        this.quantidadeItem2 = 0
        this.quantidadeItem3 = 0
        this.iniciar()
    }

    iniciar() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('tic-tac')) {
                e.preventDefault()

                this.quantidadeItem1++
                this.ticTac()
            }

            if (el.classList.contains('skol')) {
                e.preventDefault()

                this.quantidadeItem2++
                this.skol()
            }

            if (el.classList.contains('ruffles')) {
                e.preventDefault()

                this.quantidadeItem3++
                this.ruffles()
            }
        })
    }

    ticTac() {
        const texto = document.createElement('div')
        texto.innerHTML = `Tic-Tac | Quantidade: ${this.quantidadeItem1}`
        this.carrinho.appendChild(texto)
    }

    skol() {
        const texto = document.createElement('div')
        texto.innerHTML = `SKOL | Quantidade: ${this.quantidadeItem2}`
        this.carrinho.appendChild(texto)
    }

    ruffles() {
        const texto = document.createElement('div')
        texto.innerHTML = `Ruffles | Quantidade: ${this.quantidadeItem3}`
        this.carrinho.appendChild(texto)
    }

}

const produtos = new Produtos()