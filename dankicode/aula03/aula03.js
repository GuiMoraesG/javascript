class Crono {
    constructor() {
        this.segundos = 0
        this.relogio = document.querySelector('.relogio')
        this.cor = this.relogio
        this.timer
        this.pegarEventos()
    }

    pegarEventos() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-iniciar')) this.iniciar()
            if (el.classList.contains('btn-parar')) this.parar()
            if (el.classList.contains('btn-zerar')) this.zerar()
        })
    }

    cronometro() {
        this.timer = setInterval(() => {
            this.segundos++
            this.relogio.innerHTML = this.layoutCrono(this.segundos)
        }, 1000)
    }

    layoutCrono(segundos) {
        let data = new Date(segundos * 1000)

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    iniciar() {
        this.cor.style.color = 'black'
        clearInterval(this.timer)
        this.cronometro()
    }

    parar() {
        clearInterval(this.timer)
        this.cor.style.color = 'red'
    }

    zerar() {
        clearInterval(this.timer)
        this.cor.style.color = 'black'
        this.segundos = 0
        let zeros = this.relogio
        zeros.innerHTML = '00:00:00'
    }
}

const crono = new Crono()