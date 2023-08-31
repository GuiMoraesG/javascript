(async () => {
    try {
        // const headers = {
        //     'content-type': 'application/json',
        //     'TESTANDO': 'teste',
        // }
        // const init = {
        //     method: 'DELETE',
        //     headers: headers,
        //     body: JSON.stringify({
        //         title: 'TESTE'
        //     })
        // }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonData = await response.json()

        console.log(jsonData)

        // jsonData.forEach(Obj => console.log(Obj.id))
    } catch (error) {
        console.log(error)
    }
})()

// const response = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(e => console.log(e))