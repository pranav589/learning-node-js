import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 3002 });

wss.on("connection", (ws) => {
  console.log(ws);
  console.log("A new client connected");

  ws.send("Welcome to the WebSocket server");

  ws.on("message", (data) => {
    // console.log(`Received: ${message}`);

    // ws.send(`Server received: ${message}`);
    const message = data.toString();
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`User says: ${message}`);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("Websocker running on port 3002");
