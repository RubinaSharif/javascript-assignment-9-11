// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
const city = prompt("Enter city name: ");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights!");
} else {
  alert(`Welcome to ${city}!`);
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

const gender = prompt("Enter your gender (male/female): ");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir!");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am!");
} else {
  alert("Invalid input. Please enter male or female.");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
const signalColor = prompt("Enter traffic signal color (red/yellow/green): ");
switch (signalColor.toLowerCase()) {
  case "red":
    alert("Must Stop!");
    break;
  case "yellow":
    alert("Ready to move!");
    break;
  case "green":
    alert("Move now!");
    break;
  default:
    alert("Invalid input. Please enter red, yellow, or green.");
}
// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
const remainingFuel = parseFloat(prompt("Enter remaining fuel in litres: "));
if (isNaN(remainingFuel)) {
  alert("Invalid input. Please enter a number.");
} else if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert(`You have ${remainingFuel} litres of fuel left.`);
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
alert("Given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
alert("Given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
alert("Condition 1 is true");
}
if (c === 13) {
alert("Condition 2 is true");
}
if (++c < 14) {
alert("Condition 3 is true");
}
if (c === 14) {
alert("Condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
alert("The cost equals");
}
if (true) {
alert("True");
}
if (false) {
alert("False");
}
if ("car" < "cat") {
alert("car is smaller than cat");
}
// . Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var num = prompt("Enter a number:");
num = parseInt(num);
if (isNaN(num)) {
  alert("Invalid input. Please enter a number.");
} else {
  if (num % 3 === 0) {
    alert(num + " is divisible by 3.");
  } else {
    alert(num + " is not divisible by 3.");
  }
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var num = prompt("Enter a number:");
num = parseInt(num);
if (isNaN(num)) {
  alert("Invalid input. Please enter a number.");
} else {
  if (num % 2 === 0) {
    alert(num + " is an even number.");
  } else {
    alert(num + " is an odd number.");
  }
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// Prompt user to enter temperature
var temp = prompt("Enter temperature in Celsius:");
temp = parseInt(temp);
if (isNaN(temp)) {
alert("Invalid input. Please enter a number.");
} else {
if (temp > 40) {
alert("It is too hot outside.");
} else if (temp > 30) {
alert("The Weather today is Normal.");
} else if (temp > 20) {
alert("Today’s Weather is cool.");
} else if (temp > 10) {
alert("OMG! Today’s weather is so Cool.");
} else {
alert("It's freezing! Stay warm.");
}
}
