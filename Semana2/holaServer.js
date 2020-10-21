const http = require('http')
const hostname = '127.0.0.1' // localhost
const port = 3000

// _ se utiliza para quitar la advertencia de que no se usa req
// const server = http.createServer((_, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hola Node.js')
// });

const server = http.createServer((_, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end('{ "mensaje" : "Hola Node.js" }')
});

server.listen(port, hostname, () => {
    console.log(`Aplicacion corriendo en http://${hostname}:${port}`)
})