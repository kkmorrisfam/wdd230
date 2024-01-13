//Date().getFullYear()

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

let todaysDate =  new Date();
let lastModified = new Date(document.lastModified);

document.querySelector("#year").textContent = todaysDate.getFullYear();
document.querySelector('#lastModified').textContent = lastModified.toLocaleDateString("en-UK", options);


//this is for current date/time. I need document last modified date.
// document.querySelector('#lastModified').textContent = date.toLocaleDateString("en-UK", options);
