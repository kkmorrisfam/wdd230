// In the weather.js file, first select all of the HTML elements that will need to be manipulated and assign them to const variables.
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c";
        //  api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=421d590c51cdfab0417e68811f51ac9c
        // "https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.63}&units={imperial}&appid={421d590c51cdfab0417e68811f51ac9c}";

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // console.log(data.weather[0].description);
            // console.log(data.main.temp);
            let icon = data.weather[0].icon;
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
    // console.log(data);
    // console.log(data.weather[0].description);
    // console.log((data.main.temp).toFixed(0));

    let phrase = data.weather[0].description;
    let weatherDescription = capitalizeWords(phrase);


    let icon = data.weather[0].icon;
    // console.log(data.weather[0].icon);
    currentTemp.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    let desc = weatherDescription;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
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

// https://api.openweathermap.org/data/2.5/forecast?lat=41.75&lon=-124.20&units=imperial&appid=421d590c51cdfab0417e68811f51ac9c