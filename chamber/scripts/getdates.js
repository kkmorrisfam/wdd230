//Date().getFullYear()

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};



//format: Fri Mar 15 2024 20:39:08 GMT-0700 (Pacific Daylight Time)
let todaysDate =  new Date();

// The lastModified property of the Document interface returns a string containing the date and local time on which the current 
// document was last modified.
let lastModified = new Date(document.lastModified);

document.querySelector("#year").textContent = todaysDate.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified.toLocaleDateString("en-UK", options)}`;


// document.querySelector("#date-stamp").value="test value";