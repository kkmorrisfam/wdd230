// Set date & time for Join Form 
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the hidden input element
//     let timestampElement = document.getElementById('date-stamp');

//     // Set its value to the current date/time in milliseconds
//     timestampElement.value = Date.now();
//     console.log("timestamp" + timestampElement);
//   });

console.log("timestamp.js: ");

const dateStamp = Date.now();
const timestampElement = document.getElementById('date-stamp');
// console.log(dateStamp);
  timestampElement.value = dateStamp;

// console.log("test");
// console.log("timestamp:  " + timestampElement);