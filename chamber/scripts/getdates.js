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
let dateNow = Date.now();

let todaysDate =  new Date();
let lastModified = new Date(document.lastModified);


console.log(dateNow);
document.querySelector("#year").textContent = todaysDate.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified.toLocaleDateString("en-UK", options)}`;


//this is for current date/time. I need document last modified date.
// document.querySelector('#lastModified').textContent = date.toLocaleDateString("en-UK", options);

// 1. return local storage item, or if empty, assign variable with empty array
let dateVisited = Number(window.localStorage.getItem("dateVisit-Key")) || 0;
// console.log(dateVisited);
// console.log(`dateVisited ${dateVisited}`);
//test numbers:
// yesterday
// dateVisited = (dateNow - msToDays);
// this morning
// dateVisited = (dateNow - (msToDays * 1.5));
// last week
// dateVisited = (dateNow - (msToDays * 7));

// console.log(`dateVisited ${dateVisited}`);
// let days = Math.floor((dateNow-dateVisited)/msToDays);
// console.log(`let days = (dateNow-dateVisited)/msToDays: ${days}`);

// days = days / msToDays;
// console.log(days);




// 2. check date variable against today's date/time.  if same, display message, 
// else if difference is less than 24hrs, display message, else display another message

if (dateVisited == 0) {
    document.querySelector("#message").textContent = "Welcome! Let us know if you have any questions.";
}
else if ((dateNow - dateVisited) < msToDays) {
    document.querySelector("#message").textContent = "Back so soon! Awesome!";
} else  {
    let days = Math.floor((dateNow-dateVisited)/msToDays);    
    let word = "days";
    if (days == 1) {
        word = "day";
    }
    document.querySelector("#message").textContent = `You last visited ${days} ${word} ago.`;
}


// 3. reset local storage with new date/time value
localStorage.setItem("dateVisit-key", dateNow);


// Set date & time for Join Form *with help from ChatGPT
document.addEventListener('DOMContentLoaded', function() {
    // Get the hidden input element
    let timestampInput = document.getElementById('time-stamp');

    // Set its value to the current date/time in milliseconds
    timestampInput.value = Date.now();
  });
// document.querySelector(#time-stamp).textContent = dateNow;