function multiply() {
	var firstNumber = document.getElementById("firstNumber").value;
	var secondNumber = document.getElementById("secondNumber").value;

	firstNumber = parseFloat(firstNumber);
	secondNumber = parseFloat(secondNumber);

	alert(firstNumber * secondNumber);

}

// parseInt = the number is rounded down.
//  parseFloat = keeps the value of the input. 