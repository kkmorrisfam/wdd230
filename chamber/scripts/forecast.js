// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
// <!-- api key:  421d590c51cdfab0417e68811f51ac9c -->
// 41.75426851631069, -124.20396839360089

const url = "http://api.openweathermap.org/data/2.5/forecast?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";

const forcastDiv = document.querySelector("#forecast");

// Get current timestamp
const now = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds, round down to interger

async function apiFetchForecast() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
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
        
        return (index % 8 === 0) && ((itemTimestamp > (now + 86400)) && itemTimestamp <= now + (86400 * 4)); // 86400 seconds in a day, 8 3hr blocks to 24hr period
       
    });

    // Create new array with filtered data for each forecast item
    // could just use the above data
    const forecastData = nextThreeDaysForecast.map(item => {       
        let weekday = getDayOfWeek(item.dt);
       
        return {
            day : getDayOfWeek(item.dt),
            temp: item.main.temp,
            weatherIcon: item.weather[0].icon,
            description: item.weather[0].description
        };
    });

    //clear filler data
    forcastDiv.innerHTML="";
    forcastDiv.innerHTML="<h4>Three Day Forcast</h4>"
    // forcastDiv.textContent = "Three Day Forcast";
    //set DOM elements
    forecastData.forEach((key) => {    
        //id=forcast; clear innerHTML; create p element, create img
        //set img src (key.weatherIcon), alt, set innerHTML of p to key.temp, key.description
        let p = document.createElement("p");
        
        let iconsrc = `https://openweathermap.org/img/wn/${key.weatherIcon}.png`;
        let forecastDesc = capitalizeWords(key.description);
        p.innerHTML=`<img src="${iconsrc}" alt="${key.description} image">${key.day} - ${key.temp.toFixed(0)}&deg;F  ${forecastDesc}`;
      
        forcastDiv.appendChild(p);
    });
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

function getDayOfWeek(day) {    
    let newDay = new Date(day*1000);
    let days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
    let weekday = days[newDay.getDay()];
    return weekday;
}

apiFetchForecast();









