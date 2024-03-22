//banner for home page
//get the current date; get the day of the week (week is 0-6, with 0=Sunday)
//check to see if current day of week is Mon, Tues or Wed

const adArticle = document.querySelector("#ad");
const adBtn = document.querySelector("#ad-btn");
const newDate = new Date();

let dayOfWeek = newDate.getDay();

//only need to close banner if it's showing
adBtn.addEventListener("click", () => {
    adArticle.classList.remove("show");
    adArticle.classList.add("hide");
    console.log("inside event click");
});

//if day of week is 1,2 or 3 for Mon, Tues or Wed
if ((dayOfWeek > 0) && (dayOfWeek < 4)) {
    //show banner
//    console.log("inside if = yes");
    adArticle.classList.add("show");   
    adArticle.classList.remove("hide"); 
} else {
    // console.log("inside if = no");
    adArticle.classList.add("hide");
    adArticle.classList.remove("show");
}