const url = 'https://jsonplaceholder.typicode.com/posts'
const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

loadingElement.style.color = 'blue'

async function getAllPosts() {
    try {
        const resolve = await fetch(url)
        const data = await resolve.json()


    } catch (error) {
        console.log(error)
    }

}

getAllPosts()