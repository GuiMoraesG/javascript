const ePaisagem = (larg, alt) => larg > alt ? true : false
const comp = ePaisagem(5000, 100)

function epaissagem(comp) {
    if (comp) {
        return 'A foto está em modo paisagem'
    } else {
        return 'Foto está em modo retrato'
    }
}

console.log(comp, epaissagem(comp))