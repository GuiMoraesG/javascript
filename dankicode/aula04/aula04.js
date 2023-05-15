class Produtos {
    constructor() {
        this.carrinho = document.querySelector('.carrinho')
        this.itens = [
            {
                id: 0,
                nome: 'Tic-Tac',
                quantidade: 0
            },

            {
                id: 1,
                nome: 'Skol',
                quantidade: 0
            },

            {
                id: 2,
                nome: 'Ruffles',
                quantidade: 0
            },
        ]
        this.iniciar()
    }

    iniciar() {
        document.addEventListener('click', e => {
            const el = e.target

            for (let i in this.itens) {
                if (el.classList.contains('tic-tac')) {
                    e.preventDefault()

                    this.escreve(this.itens[i].nome, this.itens[i].quantidade)
                }

                if (el.classList.contains('skol')) {
                    e.preventDefault()

                    this.escreve(this.itens[i].nome, this.itens[i].quantidade)
                }

                if (el.classList.contains('ruffles')) {
                    e.preventDefault()

                    this.escreve(this.itens[i].nome, this.itens[i].quantidade)
                }
            }
        })
    }

    escreve(nome, quantidade) {
        this.carrinho.innerHTML += " " + `<p> ${nome} | Quantidade: ${quantidade} </p>`
    }

}

const produtos = new Produtos()