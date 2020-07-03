// Assignment Code
// Here we add variables
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
// The generate password function will return a newpassword that will be set to the password to be displayed
function generatePassword() {
  // asks the user how long they want the password to be and saves it to passwordLength. Password conditions are between 8-128 characters
  var passwordLength;
  passwordLength = prompt(
    "How long do you want your password to be? Please enter a # from 8 - 128."
  );
  if (
    parseInt(passwordLength) > 128 ||
    parseInt(passwordLength) < 8 ||
    isNaN(passwordLength)
    // typeof passwordLength === "boolean" ||
    // typeof passwordLength === "undefined"
  ) {
    alert("Please choose a new number between 8 - 128 for you password length");
    return generatePassword();
  }
  // placed confirm variables inside the function so that they are refreshed with every button press. These are initially set to false as to not add the chracter type to the majorBank.
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  // counter for the number of confirms
  var confirms = 0;
  // newpassword variable is an array that will be filled with our random chracters for the password
  var newpassword = [];
  //major bank is an empty array that will have the smaller banks added to it when the user chooses to. The random characters will be chosen from here.
  var majorBank = [];

  //These confirms ask the user what chracter types they would like in their password
  //initially they are defined as false, but if the user presses ok it will change value to true, which will be used in the later conditional statements

  numbers = confirm(
    "Do you want numbers in your password? Click cancel for no"
  );
  console.log(numbers);
  symbols = confirm(
    "Do you want symbols in your password? Click cancel for no"
  );
  console.log(symbols);
  caps = confirm("Do you want caps in your password? Click cancel for no");
  console.log(caps);
  lowercase = confirm(
    "Do you want lowercase in your password? Click cancel for no"
  );
  console.log(lowercase);

  // if the user chooses a character type it will add 1 to the numbe rof confirms, and adds that character bank to the majorBank
  if (numbers) {
    majorBank = majorBank.concat(num);
    confirms = confirms + 1;
  }
  if (symbols) {
    majorBank = majorBank.concat(sym);
    confirms = confirms + 1;
  }
  if (caps) {
    majorBank = majorBank.concat(alphabetCaps);
    confirms = confirms + 1;
  }
  if (lowercase) {
    majorBank = majorBank.concat(alphabetLowercase);
    confirms = confirms + 1;
  }
  // if the user decides to not pick any of the character sets, it will alert the user they need to choose atleast one and then returns the function so they can start again.
  if (confirms === 0) {
    alert(
      "To generate a password, you will need to choose atleast one type of character. Please try again"
    );
    return generatePassword();
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

// Function randomPull will take in a string and pull out a random index by mutliplying 0-1 * string length
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
