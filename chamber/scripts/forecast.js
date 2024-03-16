// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
// <!-- api key:  421d590c51cdfab0417e68811f51ac9c -->
// 41.75426851631069, -124.20396839360089

const url = "http://api.openweathermap.org/data/2.5/forecast?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
const weatherIcon = document.querySelector("#weather-icon");
// const weatherCaption = document.querySelector("#weather-caption");
// const todayTemp = document.querySelector("#temp");

const forcastDiv = document.querySelector("#forecast");

// Get current timestamp
const now = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

console.log("inside forecast");

async function apiFetchForecast() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log("fetch data: " + data);
            // console.log(data);
            // console.log(data.list[0].dt);
            // console.log(data.list[0].main.temp);
            // console.log(data.list[0].weather[0].description);           
            // console.log(data.list[0].weather[0].icon);
            // console.log(data.list[0].wind.speed);   
            // console.log(data.list[0].dt_txt);   
            // console.log(data.list[0].main.humidity);                           

            displayForecast(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error apiFetchForcast:  " + error);
    }
}

function displayForecast(data) {

    // Filter forecast data for the next three days using seconds in a day, and gets the 
    // data for every 24 hours from the first forcast dt item.  Could change this to get a 
    // specific time of date
    // Json data gives forcast objects in 3 hour increments
    const nextThreeDaysForecast = data.list.filter((item, index) => {
        const itemTimestamp = item.dt;
        return (index % 8 === 0) && (itemTimestamp > now && itemTimestamp <= now + (86400 * 3)); // 86400 seconds in a day, 8 3hr blocks to 24hr period
       
    });

    // Create new array with filtered data for each forecast item
    // could just use the above data
    const forecastData = nextThreeDaysForecast.map(item => {
        console.log(nextThreeDaysForecast);
        return {
            temp: item.main.temp,
            weatherIcon: item.weather[0].icon,
            description: item.weather[0].description
        };
    });

    console.log("forcast data: ");
    console.log(forecastData);
    forcastDiv.innerHTML="";

    //set DOM elements
    forecastData.forEach((key) => {
        console.log("element:");        
        console.log(key.temp) ;
        //id=forcast; clear innerHTML; create p element, create img
        //set img src (key.weatherIcon), alt, set innerHTML of p to key.temp, key.description
        let p = document.createElement("p");
        // let img = document.createElement("img");
        let iconsrc = `https://openweathermap.org/img/wn/${key.weatherIcon}.png`;
        let forecastDesc = capitalizeWords(key.description);
        p.innerHTML=`<img src="${iconsrc}" alt="${key.description} image">  ${key.temp.toFixed(0)}&deg;F  ${forecastDesc}`;
        console.log(p);
        forcastDiv.appendChild(p);

    });


    // calculateWindChill(temperatureInput, windSpeedInput);

}

function capitalizeWords(phrase) {
    // Split the phrase into an array of words
    let words = phrase.split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back together into a single string
    return words.join(" ");
}


apiFetchForecast();


// console.log("inside forecast");





