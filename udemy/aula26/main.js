const res = document.getElementById('res')
let ps = res.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body)
let backGroundBody = estilosBody.backgroundColor

ps[0].style.background = 'red'
ps[1].style.background = 'violet'
ps[2].style.background = 'blue'
ps[5].style.background = 'green'

for (let i in ps) {
    ps[i].style.background = 'red'
    ps[i].style.color = 'white'
    ps[i].style.padding = '8px'
    ps[i].style.borderRadius = '8px'
}