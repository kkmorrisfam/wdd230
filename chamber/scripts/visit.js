// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
// equals 24 hours. There are 86,400,000 milliseconds in one day
const msToDays = 86400000;

//format: 1710560536058 or Epoch time stamp in milliseconds
let dateNow = Date.now();

// 1. return local storage item, or if empty, assign variable with empty array
let dateVisited = Number(window.localStorage.getItem("dateVisit-Key")) || 0;

//testing code
// dateVisited = dateVisited + (msToDays *1.5);


// 2. check date variable against today's date/time.  if same, display message, 
// else if difference is less than 24hrs, display message, else display another message

if (dateVisited == 0) {
    document.querySelector("#message").textContent = "Welcome! Let us know if you have any questions.";
}
else if ((dateVisited-dateNow) < msToDays) {
    document.querySelector("#message").textContent = "Back so soon! Awesome!";    
} 
else  {
    let days = Math.floor((dateVisited-dateNow)/msToDays);    
    let word = "days";
    if (days == 1) {
        word = "day";
    }
    document.querySelector("#message").textContent = `You last visited ${days} ${word} ago.`;
}


// 3. reset local storage with new date/time value
localStorage.setItem("dateVisit-Key", dateNow);
