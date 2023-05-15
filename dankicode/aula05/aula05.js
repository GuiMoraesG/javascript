class Loja {
    constructor() {
        this.items = [
            {
                id: 0,
                nome: 'Tic-Tac',
                img: 'imagens/produtos-vendidos-com-medidas-quebradas-bala-cerveja-batata-frita-1519423107553_615x300.jpg',
                quantidade: 0
            },

            {
                id: 1,
                nome: 'Skol',
                img: 'imagens/produtos-vendidos-com-medidas-quebradas-bala-cerveja-batata-frita-1519423107553_615x300.jpg',
                quantidade: 0
            },

            {
                id: 2,
                nome: 'Ruffles',
                img: 'imagens/produtos-vendidos-com-medidas-quebradas-bala-cerveja-batata-frita-1519423107553_615x300.jpg',
                quantidade: 0
            }
        ]

        this.links = document.getElementsByName('a')
        this.iniciarLoja()
        this.clicar()
    }

    iniciarLoja = () => {
        const produto = document.querySelector('.produtos')

        this.items.map((val) => {
            produto.innerHTML += `
            <div class="produto-single">
                <img src="${val.img} " />
                <p>${val.nome}</p>
                <a class="addCarinho" key="${val.id}" href="#">Adicionar ao carrinho!<a/>
            </div>`
        })
    }

    clicar() {
        document.addEventListener('click', (e) => {
            const el = e.target
            const tag = el.tagName.toLowerCase()

            this.metodoFor(tag, el)
        })
    }

    atualizarCarrinho = () => {
        let containerCarrinho = document.querySelector('.carrinho');
        containerCarrinho.innerHTML = " ";
        this.items.map((val) => {
            if (val.quantidade > 0) {
                containerCarrinho.innerHTML += `<p> ${val.nome} | Quantidade: ${val.quantidade} </p>
                <hr>`
            }
        })
    }

    metodoFor(tag, el) {
        if (tag === 'a') {
            for (let i = 0; i <= this.links.length; i++) {
                const key = el.getAttribute('key')
                this.items[key].quantidade++

                this.atualizarCarrinho()
            }
        }
    }
}

const loja = new Loja()