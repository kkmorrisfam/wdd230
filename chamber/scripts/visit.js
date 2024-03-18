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
    console.log("back so soon");
    console.log(dateNow);
    console.log(dateVisited);
} 
else  {
    let days = Math.floor((dateNow-dateVisited)/msToDays);    
    let word = "days";
    if (days == 1) {
        word = "day";
    }
    document.querySelector("#message").textContent = `You last visited ${days} ${word} ago.`;
}


// 3. reset local storage with new date/time value
localStorage.setItem("dateVisit-Key", dateNow);
