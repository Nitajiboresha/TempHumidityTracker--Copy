/*
  Logs temperature/humidity data to a JSON file and console.
  Creates a 'logs' directory if missing.
*/

const fs = require("fs");
const path = require("path");

// Ensure the 'logs' directory exists
const logDir = "./logs";
const logPath = path.join(logDir, "data.json");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const log = (data) => {
  try {
    const timestamp = new Date().toISOString();
    const entry = { timestamp, ...data };

    // Append to log file
    fs.appendFileSync(
      logPath,
      JSON.stringify(entry) + "\n",
      { flag: "a" } // 'a' = append (default)
    );

    console.log("Logged:", entry);
  } catch (error) {
    console.error("Failed to log data:", error.message);
  }
};

module.exports = { log };