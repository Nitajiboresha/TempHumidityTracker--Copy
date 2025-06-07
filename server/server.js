const WebSocket = require("ws");
const generateMockData = require("./mockData");
const logger = require("./logger");

const WS_PORT = process.env.WS_PORT || 3035;

const wss = new WebSocket.Server({ port: WS_PORT });

wss.on("connection", (ws) => {
  console.log("Client connected");

  const interval = setInterval(() => {
    const data = generateMockData();
    ws.send(JSON.stringify(data));
    logger.log(data);
    console.log("Sent:", data);
  }, 60000); // Every 60 seconds

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

console.log(`WebSocket server running on ws://localhost:${WS_PORT}`);