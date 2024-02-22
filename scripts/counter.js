//get the display element
const visitsDisplay = document.querySelector("#numberVisits");

//get the stored value from local storage, if it exists, if it doesn't set variable to 0
let numVisits = Number(window.localStorage.getItem("numberVisits-key")) || 0;

// if (numVisits == 0) {
//     visitsDisplay.textContent = "Welcome";   
// } else {
//     visitsDisplay.textContent = numVisits;
// }

numVisits ++;
//display number of visits
visitsDisplay.textContent = numVisits;


//set local storage value
localStorage.setItem("numberVisits-key", numVisits);
