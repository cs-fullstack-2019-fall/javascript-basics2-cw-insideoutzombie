// # JavaScript-Basics2-CW

// ### Question 1
// Create two variables. One should equal “My name is: “ and the other should equal your name.
// Print the two variables in one print message.
var greeting = "My name is: ";
var myNameString = prompt("enter your name");
alert(greeting + myNameString);

// ### Question 2
// Ask the user “What is your balance”. Make sure to save that answer in a variable balance.
// Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
var balance1 = parseInt(prompt("What is your balance"));
var subT = - 10;
alert("You lost $10. Your new balance is: " + (balance1 + subT));

// ### Question 3
// Create a variable. Ask the user to “Enter your number grade”.
// Ask the user “Enter your extra credit". Print the grade plus extra credit.
var user = parseInt(prompt("Enter your number grade "));
var extraC = parseInt(prompt("Enter your extra credit "));
var grade = user + extraC;
alert("Your grade is: " + grade);

// ### Question 4
// Create a variable called balance and save it after asking the user “What is your balance?”.
// Create a variable called deduction and save it when asking the user “How much do you want to deduct?”
// Print the remaining balance after subtracting the deduction.
var balance = parseInt(prompt("What is your balance? "));
var deduction = parseInt(prompt("How much do you want to deduct?"));
alert("Your remianing balance is: " + (balance - deduction));








// if you are reading this then...... that means i got you ;)