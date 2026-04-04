const http = require('http')
const api_gacha = require('./api/gacha')
const mongo = require('./libs/mongo')
// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    const pathname = req.url.split('?')[0]

    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    if(req.method === 'POST' && pathname === '/api/gacha/open')
    {
        api_gacha.onRequestGacha(resp)
    }
    else if(req.method === 'GET' && pathname === '/api/mongo/test')
    {
        mongo.runMongoTest()
    }
    else
    {
        resp.write(JSON.stringify( { message: 'Hello Vercel class' } ))
    }

    resp.end()
}
// ---------------------------------------------------------------
const server = http.createServer( onClientRequest )
server.listen(PORT)
console.log('running on '+PORT)