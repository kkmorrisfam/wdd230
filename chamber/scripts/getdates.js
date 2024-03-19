//Date().getFullYear()

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
// equals 24 hours.
const msToDays = 84600000;

//format: 1710560536058
let dateNow = Date.now();

//format: Fri Mar 15 2024 20:39:08 GMT-0700 (Pacific Daylight Time)
let todaysDate =  new Date();

let lastModified = new Date(document.lastModified);

document.querySelector("#year").textContent = todaysDate.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified.toLocaleDateString("en-UK", options)}`;


// document.querySelector("#date-stamp").value="test value";