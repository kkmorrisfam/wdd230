//this selects the id for the button
const darkModeToggle = document.querySelector('#dark-toggle');

// document.body.classList("dark-mode");

//when the button is clicked
darkModeToggle.addEventListener('click', () => {	
    //toggle on the dark-mode class
	// darkModeToggle.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    console.log()
});