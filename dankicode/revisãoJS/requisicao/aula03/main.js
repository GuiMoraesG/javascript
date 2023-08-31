// GET
// fetch('https://reqres.in/api/users')
//     .then(res => res.json())
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))


// POST

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Guilherme',
    }),
})
    .then(res => res.json())
    .then(data => console.log(data))