// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// SUMMER CAMP ACTIVITIES
// ======================

// You are given four variables with numeric values.

var kidsWhoWantToSwim = 25;   // number of kids who want to swim
var kidsWhoWantDoArchery = 5; // number of kids who want to do archery
var totalSwimmers = 0;        // number of kids who are actually swimming in the afternoon
var totalArchers = 0;         // number of kids who are actually doing archery in the afternoon

// Using if and else statements, apply the following rules:
// If kidsWhoWantToSwim is even,
// - assign the value of kidsWhoWantToSwim to totalSwimmers
// - assign the value of kidsWhoWantDoArchery to totalArchers

// If kidsWhoWantToSwim is odd, then at least one kid doesn't have a swimming buddy. 
// To avoid leaving anyone out, we'll just do archery that afternoon.
// - add the values of kidsWhoWantToSwim and kidsWhoWantDoArchery and assign the result to totalArchers
// - totalSwimmers should remain at 0

// Hint: ------------------
// You can use the modulo operator (%) to determine if a number is even. 
// If it's even, n % 2 will be zero because there is no remainder when an even number is divided by 2.
// ------------------------

// Write your code here:



// When you're finished, save the changes and open practice/02-if-statements/index.html with your browser. (The html file is is the same subfolder as this file, and it already includes code to reference this file.)
// Open the JavaScript console in your browser's developer tools.
// Confirm there are no errors.
// Confirm that totals are correct.
// If there are problems, double-check your code, make fixes, save the changes, and reload the page.
// Repeat until your JavaScript console is error-free and works as expected.

// Keep going!
// Change the initial variable values to test different scenarios.
// Examples:
// ---------------------|---|----|----|----|---
// kidsWhoWantToSwim    | 3 | 20 | 45 | 25 | 12
// kidsWhoWantDoArchery | 2 |  6 |  1 |  5 | 11
// totalSwimmers        | 0 | 20 |  0 |  0 | 12
// totalArchers         | 5 |  6 | 46 | 30 | 11

// Stretch Goal:
// Add additional if/else statements to handle negative numbers.
// If either kidsWhoWantToSwim or kidsWhoWantDoArchery is negative, it's an invalid setup.
// Set both totatSwimmers and totalArchers to 0.

// This code prints your variables to the JavaScript console.
console.log("kidsWhoWantToSwim = %s", kidsWhoWantToSwim);
console.log("kidsWhoWantDoArchery = %s", kidsWhoWantDoArchery);
console.log("totalSwimmers = %s", totalSwimmers);
console.log("totalArchers = %s", totalArchers);






/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/