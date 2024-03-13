// 41.75426851631069, -124.20396839360089
// "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
// <!-- api key:  421d590c51cdfab0417e68811f51ac9c -->

const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const caption = document.querySelector("#weather-caption");

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.weather[0].description);
            console.log(data.main.temp);
            let icon = data.weather[0].icon;
            console.log(data.weather[0].icon);
            console.log(`https://openweathermap.org/img/wn/${icon}.png`);
            
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
    
    currentTemp.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    let desc = weatherDescription;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    caption.textContent = `${desc}`;
}


//with help from ChatGPT
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


apiFetch();