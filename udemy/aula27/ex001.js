function random(max, min) {
    const r = Math.round(Math.random() * (max - min) + min)
    return r
}

let rand = random(10, 1)

while (rand !== 10) {
    rand = random(10, 1)
    console.log(rand)
}