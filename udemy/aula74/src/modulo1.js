const nome = 'Guilherme'
const sobreNome = 'Moraes'
const idade = 22

function soma(x, y) {
    return x + y
}

// export class Pessoa {
//     constructor(nome, sobreNome) {
//         this.nome = nome
//         this.sobreNome = sobreNome
//     }
// }

// Também é possivel usar o export direto na variavel/function/class. ex: export const nome = 'Guilherme'

export { nome, sobreNome, idade, soma }