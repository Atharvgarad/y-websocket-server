
import http from 'http';
import { createServer } from 'http';

const { setupWSConnection } = require('y-websocket/bin/utils')
const { WebSocketServer } = require('ws')

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws, req) => {
  setupWSConnection(ws, req)
})

const port = process.env.PORT || 1234
server.listen(port, '0.0.0.0', () => {
  console.log(`WebSocket server running on port ${port}`)
})
