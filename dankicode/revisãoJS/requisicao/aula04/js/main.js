const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

const postPage = document.querySelector('#post')
const postContainer = document.querySelector('#post-container')
const commentsContainer = document.querySelector('#comments-container')

const commentForm = document.querySelector('#comment-form')
const emailInput = document.querySelector('#email')
const bodyInput = document.querySelector('#body')

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get('id')

async function getAllPosts() {
    try {
        const resolve = await fetch(url)
        const data = await resolve.json()

        loadingElement.classList.add('hide')

        data.forEach(posts => {
            const div = document.createElement('div')
            const title = document.createElement('h2')
            const body = document.createElement('p')
            const link = document.createElement('a')

            title.innerText = posts.title
            body.innerText = posts.body
            link.innerText = 'Ler'
            link.setAttribute('href', `/posts.html?id=${posts.id}`)

            div.appendChild(title)
            div.appendChild(body)
            div.appendChild(link)
            postsContainer.appendChild(div)
        })


    } catch (error) {
        console.log(error)
    }

}

async function getPost(id) {
    const [responsePost, responseComment] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments = await responseComment.json()

    loadingElement.classList.add('hide')
    postPage.classList.remove('hide')

    const title = document.createElement('h1')
    const body = document.createElement('p')

    title.innerText = dataPost.title
    body.innerText = dataPost.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)

    dataComments.map((comment) => { createComment(comment) })
}

function createComment(comment) {
    const div = document.createElement('div')
    const email = document.createElement('h3')
    const commentBody = document.createElement('p')

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentBody)

    commentsContainer.appendChild(div)
}

async function postComment(comment) {
    const response = await fetch(`${url}/${postId}/comments`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: comment
    })

    const data = await response.json()

    createComment(data)
}

if (!postId) {
    getAllPosts()
} else {
    getPost(postId)

    commentForm.addEventListener('submit', e => {
        e.preventDefault()
        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        }
        comment = JSON.stringify(comment)

        postComment(comment)
    })
}
