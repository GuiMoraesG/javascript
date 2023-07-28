const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    if (req.url === '/produto') {
        res.end(JSON.stringify({
            message: 'Rota de Protudo'
        }))
    }

    if (req.url === '/usuario') {
        res.end(JSON.stringify({
            message: 'Rota de Usuário'
        }))
    }

}).listen(4001, () => console.log('Servidor ligado na Porta: http://localhost:4001'))