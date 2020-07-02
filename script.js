// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetLowercase);
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(alphabetCaps);
var num = "1234567890".split("");
console.log(num);
var sym = "~!@#$%^&*<>?,.;:{}[]-=+_)(".split("");
console.log(sym);

// Write password to the #password input
//numbers?
//symbols?
//caps?
//lowercase?
// function will pull variable from a higher scope
function generatePassword() {
  var passwordLength;
  passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a new number between 8 - 128 for you password length");
    return generatePassword();
  }
  //placed confirm variables inside the function so that they are refreshed with every button press
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var confirms = 0;
  // newpassword variable is an array that will be filled with our random chracters for the password
  var newpassword = [];
  var majorBank = [];

  //These confirms ask the user what chracter types they would like in their password
  //initially they are defined as false, but if the user presses ok it will change value to true, which will be used in the later conditional statements

  numbers = confirm("Do you want numbers in your password? Click cancel for no");
  console.log(numbers);
  symbols = confirm("Do you want symbols in your password? Click cancel for no");
  console.log(symbols);
  caps = confirm("Do you want caps in your password? Click cancel for no");
  console.log(caps);
  lowercase = confirm("Do you want lowercase in your password? Click cancel for no");
  console.log(lowercase);

  // counter of # of confirms, checks to see of var numbers, symbols, caps, lowercase is true, and if it is true adds one to the counter of confirms. This will be used to set the number of randoms characters to be pulled from the character bank
  if (numbers) {
    majorBank = majorBank.concat(num);
    confirms = confirms + 1;
  }
  if (symbols) {
    majorBank = majorBank.concat(sym);
    confirms = confirms + 1;
  }
  if (caps) {
    majorBank = majorBank.concat(alphabetCaps)
    confirms = confirms + 1;
  }
  if (lowercase) {
    majorBank = majorBank.concat(alphabetLowercase)
    confirms = confirms + 1;
  }
  console.log(confirms);

  //If a user choses yes to put in a symbol, then a random character from that array will be pushed into the end of the newpassword

  if (numbers) {
    newpassword.push(num[randomPull(num)]);
  }
  if (symbols) {
    newpassword.push(sym[randomPull(sym)]);
  }
  if (lowercase) {
    newpassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  if (caps) {
    newpassword.push(alphabetCaps[randomPull(alphabetCaps)]);
  }
  console.log(newpassword);

  // if true must include atleast one of the groups above
  // if true add one from the array/string from each group then choose from larger character bank
  // if yes it will be (passwordLength - number of choices)

  // This for loop is for knowing how many characters to pull from the major bank

  for (var i = 0; i < passwordLength - confirms; i++) {
    newpassword.unshift(majorBank[randomPull(majorBank)]);
  }
  //this will give an array of newpassword
  console.log(newpassword);
  newpassword = newpassword.join("");
  //this will give a string of newpassword
  console.log(newpassword);
  //returns the function as newpassword
  return newpassword;
}

// }
// Function randomPull will take in a string and pull out a random index by mutliplying 0-1 * string length
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // If confirmed we will get atleast 1 character from each of the confirmed properties and add it to the password

  // THEN my input should be validated and at least one character type should be selected

  // create if else statement that checks array length between 8-128, and asks if they want number, upp case etc..
  //user prompt - if not between 8-128, have them re-enter a number
  //create if statements that add to the array
  // .flat the combined array
  //.floor * array length w/ math
  //.join the result array

  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
