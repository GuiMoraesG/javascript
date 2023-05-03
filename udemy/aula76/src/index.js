import GeraCPF from './modulos/GeraCPF'
import './style.css'

(function () {
    const gera = new GeraCPF()
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = gera.geraNovoCPF()
})()