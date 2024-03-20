// not sure if I will be getting these values from the page and using them here, or 
const tempElement = document.querySelector("#temp");
const windspeedElement = document.querySelector("#windspeed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-caption");
const humidityElement = document.querySelector("#humidity");
const weatherDate = document.querySelector("#weather-date");

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";

// console.log("inside windchill");

async function apiFetch() {
  try{
      const response = await fetch(weatherURL);
      if (response.ok) {
          const data = await response.json();
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
  
  tempElement.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(data.dt);
  let newDateString = getDate(data.dt);
  console.log(newDateString);
  weatherDate.textContent = newDateString;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherDescription);
  weatherCaption.textContent = `${weatherDescription}`;
  humidityElement.textContent = `${data.main.humidity}`;

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

   
function capitalizeWords(phrase) {
  // Split the phrase into an array of words
  let words = phrase.split(" ");

  let capitalizedPhrase = words.map((word) =>  word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back together into a single string
  return capitalizedPhrase.join(" ");
}

function getDate(timestamp) {
  const myDate = new Date(timestamp * 1000);
  let dateString = myDate.toDateString();
  return dateString;
}
apiFetch();