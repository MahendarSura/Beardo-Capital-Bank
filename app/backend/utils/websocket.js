
const WebSocket = require('ws');

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', ws => {
    console.log('WebSocket client connected.');

    ws.on('message', message => {
      // Echo messages back to all clients
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on('close', () => console.log('WebSocket client disconnected.'));
  });
}

module.exports = { setupWebSocket };

