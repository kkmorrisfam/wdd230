const rangevalue = document.getElementById("rangeDiv");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// password matching

const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formMessage");

password2.addEventListener("focusout", checkSame);

function checkSame() {
	if (password.value !== password2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
		password.value = "";
        password2.value = "";
		password.focus();
	} else {
		message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}

// function nextInput {
// 	password2.value=""
// }
