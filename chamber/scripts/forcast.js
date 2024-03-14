// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
// <!-- api key:  421d590c51cdfab0417e68811f51ac9c -->
// 41.75426851631069, -124.20396839360089

const url = "http://api.openweathermap.org/data/2.5/forecast?lat=41.75&lon=-124.20&appid=421d590c51cdfab0417e68811f51ac9c";
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-caption");
const todayTemp = document.querySelector("#temp");
const windSpeed = document.querySelector("#windspeed");
const windChill = document.querySelector("#windchill");
const forcastDiv = document.querySelector("#forcast");

// Get current timestamp
const now = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

async function apiFetchForcast() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("fetch data: " + data);           

            displayForcast(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error apiFetchForcast:  " + error);
    }
}

function displayForcast(data) {

    // Filter forecast data for the next three days using seconds in a day
    // Json data gives forcast objects in 3 hour increments
    const nextThreeDaysForecast = data.list.filter(item => {
        const itemTimestamp = item.dt;
        return itemTimestamp > now && itemTimestamp <= now + (86400 * 3); // 86400 seconds in a day
    });

    // Create new array with filtered data for each forecast item
    const forecastData = nextThreeDaysForecast.map(item => {
        return {
            temp: item.main.temp,
            weatherIcon: item.weather[0].icon,
            description: item.weather[0].description
        };
    });

    console.log("forcast data: " + forcastData);
    
}




// ideas from chapGPT



