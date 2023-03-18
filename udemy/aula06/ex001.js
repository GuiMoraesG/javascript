let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

console.log(varA, varB, varC)

let varD = varC
varC = varA
varA = varB
varB = varD


console.log(varA, varB, varC)