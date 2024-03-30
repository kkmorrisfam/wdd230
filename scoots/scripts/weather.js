//banner for home page

const weatherBanner = document.querySelector("#weather-banner");
const bannerBtn = document.querySelector("#banner-btn");

bannerBtn.addEventListener("click", () => {
    weatherBanner.classList.add("hide");
    console.log("inside event click");
});

// Get current weather - display results
const tempElement = document.querySelector("#current-temp");
const maxTempt = document.querySelector("#todays-high");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-caption");
const humidityElement = document.querySelector("#humidity");
const weatherDate = document.querySelector("#weather-date");
const feelsLike = document.querySelector("#feels-like");
const tomorrowHigh = document.querySelector("#forcast");

// let newDateString = "";
// const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.94&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
// const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.84&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
const weatherURL = "data/weather.json";
const forcastURL = "data/test.json";


//current weather information
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
  
  let newDateString = getDate(data.dt);
  console.log(newDateString);
  
  weatherDate.textContent = newDateString;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherDescription);
  weatherCaption.textContent = `${weatherDescription}`;
  humidityElement.textContent = `${data.main.humidity}`;
 
  feelsLike.innerHTML = `${(data.main.feels_like).toFixed(0)}&deg;F`;
  maxTempt.innerHTML = `${(data.main.temp_max).toFixed(0)}&deg;F`;

// I'm going to leave this here for future reference.  The temp_min & temp_max values
// are only for that point in time, not actually for the day. 
  if ((data.main.temp_max) > (data.main.temp)) {
    maxTempt.innerHTML = `was ${(data.main.temp_max).toFixed(0)}&deg;F`;
  } else {
    maxTempt.innerHTML = `is ${(data.main.temp_max).toFixed(0)}&deg;F`;
  }
  
}

//get forcast data
async function apiFetchForecast() {
    try{
        const response = await fetch(forcastURL);
        if (response.ok) {
            const data = await response.json();
            console.log("inside apiFetchForcast")
            console.log(data);
            displayForecast(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error apiFetchForcast:  " + error);
    }
}

function displayForecast(data) {
       

    // let itemDateString = data.list.dt_txt;        
    // console.log(itemDateString);
    let currentDate = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(currentDate.getDate() +1);
    console.log(tomorrow);
    let newDateString = itemDateString.splice(0,9);
    let newTomorrow = tomorrow.splice(0,9);

    // const tomorrowForcast = data.list.filter(item=> {
    
    //     return newDateString == newTomorrow;
    // });

    // console.log("tomorrow forcast new array:");
    // console.log(tomorrowForcast);
    //set DOM elements
    
            // forecastData.forEach((key) => {    
            //     //id=forcast; clear innerHTML; create p element, create img
            //     //set img src (key.weatherIcon), alt, set innerHTML of p to key.temp, key.description
            //     let p = document.createElement("p");
                
            //     let iconsrc = `https://openweathermap.org/img/wn/${key.weatherIcon}.png`;
            //     let forecastDesc = capitalizeWords(key.description);
            //     p.innerHTML=`<img src="${iconsrc}" alt="${key.description} image">${key.day} - ${key.temp.toFixed(0)}&deg;F  ${forecastDesc}`;
            
            //     forcastDiv.appendChild(p);
            // });
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
apiFetchForecast();