const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in num) {

    if (num[i] == 2 || num[i] == 5) {
        continue
    }
    console.log(num[i])
}