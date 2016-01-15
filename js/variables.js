// Variable Manipulation

var finalValue;

var firstValue = prompt("Pick a number");
var secondValue = prompt("Pick another number");

console.log("firstValue is:", firstValue);
console.log("firstValue type is:", typeof firstValue);

console.log("secondValue is:", secondValue);
console.log("secondValue type is:", typeof secondValue);

firstValue = parseInt(firstValue);
secondValue = parseInt(secondValue);

console.log("Types have been coerced");

if(isNaN(firstValue)){
	alert("Please choose a number!");
} else {
	console.log("firstValue is:", firstValue);
	console.log("firstValue type is:", typeof firstValue);

	console.log("secondValue is:", secondValue);
	console.log("secondValue type is:", typeof secondValue);

	finalValue = firstValue * secondValue;

	console.log("finalValue:", finalValue);
}


