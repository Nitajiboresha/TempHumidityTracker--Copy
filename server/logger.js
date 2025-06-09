const fs = require("fs");
const path = require("path");

const logDir = "./logs";
const logPath = path.join(logDir, "data-log.json");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const log = (data) => {
  try {
    const timestamp = new Date().toISOString();
    const entry = { timestamp, ...data };

    fs.appendFileSync(
      logPath,
      JSON.stringify(entry) + "\n",
      { flag: "a" }
    );

    console.log("📝 Logged:", entry);
  } catch (error) {
    console.error("❌ Failed to log data:", error.message);
  }
};

module.exports = { log };