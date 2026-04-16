import http from 'http'
import { WebSocketServer } from 'ws'
import { setupWSConnection } from 'y-websocket/bin/utils'

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('y-websocket server running')
})

const wss = new WebSocketServer({ server })

wss.on('connection', (ws, req) => {
  setupWSConnection(ws, req)
})

const port = process.env.PORT || 1234
server.listen(port, '0.0.0.0', () => {
  console.log(`WebSocket server running on port ${port}`)
})