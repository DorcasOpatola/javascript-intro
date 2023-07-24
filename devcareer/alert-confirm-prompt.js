"use strict"; // to enable strict mode and modern JavaScript functionality


// ALERT - displays a message and waits for the user to press “OK”
let firstName = "Verath"; // string
let lastName = "Dami";
alert("Hi " + firstName +" " + lastName); // Hi Verath Dami


// PROMPT - returns the value entered by the user or null if Cancel is pressed
let age = prompt("How old are you " + firstName + "?", 0); // default value is 0
alert(`You do amazing things for someone merely ${age} years of age ${firstName}! I am impressed!`);

firstName = prompt("What is your name?", "First Name"); // default value is "First Name"
alert(`Welcome to Nigeria ${firstName}, we are delighted to have you!`);


// CONFIRM - returns true if OK is pressed, false otherwise
let wildAnimal = confirm("Is Giraffe a wild animal?"); // true if OK is pressed, false otherwise
alert(`You answered ${wildAnimal} to the question "Is Giraffe a wild animal?".`);
