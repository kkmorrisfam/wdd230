// Set date & time for Join Form 
// Get the hidden input element
// Set its value to the current date/time in milliseconds

const dateStamp = Date.now();
const timestampElement = document.getElementById('date-stamp');

timestampElement.value = dateStamp;
