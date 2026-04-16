const { createServer } = require('http')
const { setupWSConnection } = require('y-websocket/bin/utils')
const { WebSocketServer } = require('ws')

const server = createServer((req, res) => {
  res.writeHead(200)
  res.end('y-websocket server running')
})

const wss = new WebSocketServer({ server })

wss.on('connection', (ws, req) => {
  setupWSConnection(ws, req)
})

const port = process.env.PORT || 1234
server.listen(port, () => {
  console.log(`WebSocket server running on port ${port}`)
})
