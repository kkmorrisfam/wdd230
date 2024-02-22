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
console.log(dateVisited);

// 2. check date variable against today's date/time.  if same, display message, 
// else if difference is less than 24hrs, display message, else display another message

if (dateVisited == 0) {
    document.querySelector("#message").textContent = "Welcome";
}
else if ((dateNow - dateVisited) < msToDays) {
    document.querySelector("message").textContent = "another message";
} else  {
    document.querySelector("message").textContent = "last message";
}


// 3. reset local storage with new date/time value
localStorage.setItem("dateVisit-key", dateNow);