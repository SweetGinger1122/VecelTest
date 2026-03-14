const http = require('http')
// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    resp.write(JSON.stringify( { message: 'Hello Vercel class 2310511105004' } ))

    resp.end()
}
// ---------------------------------------------------------------
const server = http.createServer( onClientRequest )
server.listen(PORT)
console.log('running on '+PORT)
