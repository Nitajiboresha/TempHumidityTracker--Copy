const http = require("http");
const WebSocket = require("ws");
const generateMockData = require("./mockData");
const logger = require("./logger"); // Assuming logger.js is in the same directory

const WS_PORT = process.env.WS_PORT || 3035;
const HTTP_PORT = process.env.HTTP_PORT || 3036;

const wss = new WebSocket.Server({ port: WS_PORT });

wss.on("connection", (ws) => {
  console.log("Client connected");

  const interval = setInterval(() => {
    const data = generateMockData();
    ws.send(JSON.stringify(data));
    logger.log(data); // Log data to file
    console.log("Sent:", data);
  }, 60000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Connect to WebSocket at ws://localhost:${WS_PORT}`);
}).listen(HTTP_PORT, () => {
  console.log(`HTTP server running on http://localhost:${HTTP_PORT}`);
});

console.log(`WebSocket server running on ws://localhost:${WS_PORT}`);