let lastTemp = 20.0;  // Default starting values
let lastHumidity = 50;

const generateMockData = (options = {}) => {
  const {
    minTemp = 10,
    maxTemp = 40,
    minHumidity = 30,
    maxHumidity = 80,
    fluctuationTemp = 2,    // Max ±2°C change
    fluctuationHumidity = 5, // Max ±5% change
  } = options;

  // Simulate small fluctuations from last value
  lastTemp = Math.min(
    maxTemp,
    Math.max(minTemp, lastTemp + (Math.random() * fluctuationTemp * 2 - fluctuationTemp))
  );
  lastHumidity = Math.min(
    maxHumidity,
    Math.max(minHumidity, lastHumidity + (Math.random() * fluctuationHumidity * 2 - fluctuationHumidity))
  );

  return {
    temp: lastTemp.toFixed(1),
    humidity: lastHumidity.toFixed(0),
    timestamp: new Date().toISOString(),
  };
};

module.exports = generateMockData;