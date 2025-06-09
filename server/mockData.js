let lastTemp = 20.0;
let lastHumidity = 50;

const generateMockData = (options = {}) => {
  const {
    minTemp = 10,
    maxTemp = 40,
    minHumidity = 30,
    maxHumidity = 80,
    fluctuationTemp = 2,
    fluctuationHumidity = 5,
  } = options;

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