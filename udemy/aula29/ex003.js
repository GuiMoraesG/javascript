function fizzBuzz(num) {
    if (typeof (num) != 'number') return num
    if (num > 100) return 'Numero Inválido'
    if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz'
    if (num % 3 == 0) return 'Fizz'
    if (num % 5 == 0) return 'Buzz'
    return num
}

console.log(fizzBuzz(5))

