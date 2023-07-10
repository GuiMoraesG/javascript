exports.middlewareGlobal = (req, res, next) => {
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}

exports.checkCsrfError = (err, req, res) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('BAD CSRF.')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}