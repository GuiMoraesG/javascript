const pessoas = [
    { id: 3, nome: 'Guilherme' },
    { id: 32, nome: 'Luiz' },
    { id: 1, nome: 'Mariua' }
]

// const novasPessoa = {}
// for (const { id, nome } of pessoas) {
//     novasPessoa[id] = { id, nome }
// }

const novasPessoa = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoa.set(id, { ...pessoa })
}

console.log(novasPessoa)
console.log(novasPessoa.get(32))