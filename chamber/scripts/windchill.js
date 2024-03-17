// not sure if I will be getting these values from the page and using them here, or 
const tempElement = document.querySelector("#temp");
const windspeedElement = document.querySelector("#windspeed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-caption");
const humidityElement = document.querySelector("#humidity");

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";

// console.log("inside windchill");

async function apiFetch() {
  try{
      const response = await fetch(weatherURL);
      if (response.ok) {
          const data = await response.json();
          // console.log(data);
          // console.log(data.weather[0].description);
          // console.log(data.main.temp);
          // let icon = data.weather[0].icon;
          // console.log(data.weather[0].icon);
          // console.log(`https://openweathermap.org/img/wn/${icon}.png`);     

          displayResults(data);

      } else {
          throw(Error(await response.text()))
      }
  } catch (error) {
      console.log("caught error:  " + error);
  }
}

function displayResults(data){ 
  let phrase = data.weather[0].description;
  let weatherDescription = capitalizeWords(phrase);
  let icon = data.weather[0].icon;
  
  // console.log("data.weather[0].description");
  // console.log(phrase);

  tempElement.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
  // let desc = weatherDescription;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherDescription);
  weatherCaption.textContent = `${weatherDescription}`;
  humidityElement.textContent = `${data.main.humidity}`;

  // console.log(data.main.temp);
  // console.log(data.wind.speed);


  windspeedElement.innerHTML = calculateWindChill(data.main.temp, data.wind.speed);
}


function calculateWindChill(temperature, windSpeed) {
      // Check if temperature and wind speed meet the specification limits
      if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula: 35.74 + 0.6215 * T - 35.75 * W^0.16 + 0.4275 * T * W^0.16
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        // Display the calculated wind chill
        // console.log("Wind Chill: " + windChill.toFixed(2) + " °F");
        return `Windchill: ${windChill.toFixed(2)}`;
      } else {
        // Display "N/A" if conditions are not met
        // console.log("N/A");
        return("N/A");
      }
    }

    // Example usage:
    // Replace these values with the actual temperature and wind speed from API or Webside display?
    // let temperatureInput = 42;
    // let windSpeedInput = 5;

    // Call the function with the provided inputs
    // calculateWindChill(temperature, windSpeed);

    // document.getElementById("windchill").innerHTML = calculateWindChill(temperatureInput, windSpeedInput);
    // tempElement.innerHTML = temperatureInput;
    // windSpeedElement.innerHTML = windSpeedInput;

    
function capitalizeWords(phrase) {
  // Split the phrase into an array of words
  let words = phrase.split(" ");
  // console.log(words);

  // Capitalize the first letter of each word
  // for (let i = 0; i < words.length; i++) {
  //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  // }

  //also works with map function
  let capitalizedPhrase = words.map((word) =>  word.charAt(0).toUpperCase() + word.slice(1));
  // console.log(capitalizedPhrase);


  // Join the words back together into a single string
  return capitalizedPhrase.join(" ");
}

apiFetch();