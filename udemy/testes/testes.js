function debug(msg) {
    let log = document.getElementById('debuglog')

    if (!log) {
        log = document.createElement('div')
        log.setAttribute('id', 'debuglog')

        log.innerHTML = '<h1>Debug Log</h1>'

        document.body.appendChild(log)
    }

    let pre = document.createElement('pre')
    pre.innerText = msg

    log.appendChild(pre)
}

document.addEventListener('click', e => {
    const el = e.target

    if (el.tagName === 'P') {
        el.setAttribute('class', 'invisivel')
    }
})


debug('ola')