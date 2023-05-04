function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('OLÀ< DFADADAD')
            resolve()
        }, 2000)
    })
}

export default async function executa() {
    await promise()
    console.log('TErminou')
}