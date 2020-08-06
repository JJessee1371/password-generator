// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("generatePassword is working")
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("writePassword is working")







//Arrays for randomized choices by the computer
let create = []

const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let lowerLetters = []

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"]


//User prompt questions: 

//User chooses a string length between 8 and 128
let passLength = prompt("Please enter a password length between 8 and 128.");
console.log(passLength);

//Code will run if the user has not entered a valid number
while (passLength < 8 || passLength > 128) {
  alert("Value must be between 8 and 128.");
  passLength = prompt("Value must be between 8 and 128.");
    
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
    {break}
  }
}

//Uppercase value confirm
let upperCase = confirm("Would you like to include upper case letters?");
console.log(upperCase);

if (upperCase === true) {
  create = create.concat(upperLetters);
}
console.log(create);


//Lowercase value confirm
let lowerCase = confirm("Would you like to include lower case letters?");
console.log(lowerCase);

if (lowerCase === true) {
  for (i = 0; i < upperLetters.length; i++) {
    lowerLetters = upperLetters[i].toLowerCase();
    create = create.concat(lowerLetters);
  }
}
console.log(create);

//Numeric value confirm
let num = confirm("Would you like to include numbers?");
console.log(num);

if (num === true) {
  create = create.concat(numbers);
}
console.log(create);

//Special characters confirm
let special = confirm("Would you like to include special characters?");
console.log(special);

if (special === true) {
  create = create.concat(specChar);
}
console.log(create);

console.log(passLength);

//Code will run if user has not selected at least one character type to use in the password. 
if (upperCase === false && lowerCase === false && num === false && special === false) {
  while (upperCase === false && lowerCase === false && num === false && special === false) {
    alert("At least one character selection must be made.");

    let upperCase = confirm("Would you like to include upper case letters?");
      if (upperCase === true) {
        create = create.concat(upperLetters);
      }
      console.log(create);

    let lowerCase = confirm("Would you like to include lower case letters?");
      if (lowerCase === true) {
        for (i = 0; i < upperLetters.length; i++) {
          lowerLetters = upperLetters[i].toLowerCase();
          create = create.concat(lowerLetters);
        }
      }
      console.log(create);

    let num = confirm("Would you like to include numbers?");
      if (num === true) {
        create = create.concat(numbers);
      }
      console.log(create);

    let special = confirm("Would you like to include special characters?");
      if (special === true) {
        create = create.concat(specChar);
      }
      console.log(create);

  if (lowerCase === true || upperCase === true || num === true || special === true) {
    console.log(lowerCase, upperCase, num, special);
    {break}
    }
  }
}
console.log(passLength);
//Main function - generating a password from the desired values and returning the password.
let password = "" 
function generatePassword() {
for (i = 0; i < passLength; i++) {
  password = password + create[Math.floor(Math.random() * create.length)];
  console.log(password);
  }
  return password
}







