const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
} 

Object.setPrototypeOf(objB, objA)

console.log(objB.chaveA)