function fizzBuzz(num) {
    if (typeof num === 'string') return 'O valor é uma string '
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'

    return num
}

console.log(fizzBuzz('15'))