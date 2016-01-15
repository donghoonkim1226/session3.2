function isString() {
	var firstInput = document.getElementById("firstInput").value;
	var secondInput = document.getElementById("secondInput").value;

	console.log("firstInput is a ", typeof firstInput);
	console.log("secondInput is a ", typeof secondInput);
}

function smaller() {
	var thirdInput = parseFloat(document.getElementById("thirdInput").value);
	var fourthInput = parseFloat(document.getElementById("fourthInput").value);

	if(thirdInput === fourthInput) {
		console.log("Both numbers are the same!");
	} else if(thirdInput < fourthInput) {
		console.log("first number is less than second number");
	} else {
		console.log("second number is less than first number");
	}
}

function fullName() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;

	console.log("Your full name is " + firstName + " " + lastName);
}