const socket = new WebSocket("ws://localhost:3035");

const tempElement = document.getElementById("temp");
const humidityElement = document.getElementById("humidity");
const statusElement = document.getElementById("status");

socket.addEventListener("open", (event) => {
  statusElement.textContent = "Connected ✅";
  statusElement.style.color = "green";
  statusElement.className = "connected";
});

socket.addEventListener("message", (event) => {
  try {
    const data = JSON.parse(event.data);
    tempElement.textContent = data.temp;
    humidityElement.textContent = data.humidity;
    document.getElementById("timestamp").textContent = `Last update: ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    console.error("Failed to parse data:", error);
  }
});

socket.addEventListener("error", (error) => {
  statusElement.textContent = "Connection failed ❌";
  statusElement.style.color = "red";
});

socket.addEventListener("close", () => {
  statusElement.textContent = "Disconnected 🔄";
  statusElement.style.color = "orange";
  statusElement.className = "disconnected";
  setTimeout(() => {
    socket.close();
    socket = new WebSocket("ws://localhost:3035");
  }, 5000);
});