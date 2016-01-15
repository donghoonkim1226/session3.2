// Demonstrate Natives

var myString = "Some string";
var myBoolean = true;
var myNumber = 4;

console.log("myString is a ", typeof myString);
console.log("myBoolean is a ", typeof myBoolean);
console.log("myNumber is a ", typeof myNumber);

var myDate = new Date();
console.log("myDate is a ", typeof myDate);

var myArray = [1, "two", {three:3}];
console.log("myArray is a ", typeof myArray);

var myVar;
console.log("myVar", myVar);

var studentOne = {
	firstName: "Dong Hoon",
	lastName: "Kim",
	age: 27,
	birthPlace: {
		country: "South Korea"
	}
}

// Dynamic Typing
console.log("Dynamic Typing");
console.log(studentOne);
console.log(typeof studentOne);