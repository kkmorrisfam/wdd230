// with chatgpt

function calculateWindChill(temperature, windSpeed) {
      // Check if temperature and wind speed meet the specification limits
      if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula: 35.74 + 0.6215 * T - 35.75 * W^0.16 + 0.4275 * T * W^0.16
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        // Display the calculated wind chill
        console.log("Wind Chill: " + windChill.toFixed(2) + " °F");
      } else {
        // Display "N/A" if conditions are not met
        console.log("N/A");
      }
    }

    // Example usage:
    // Replace these values with the actual temperature and wind speed from your webpage
    let temperatureInput = 40;
    let windSpeedInput = 5;

    // Call the function with the provided inputs
    calculateWindChill(temperatureInput, windSpeedInput);
