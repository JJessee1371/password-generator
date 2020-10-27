//Form submission event listener
document.getElementById('create-form').addEventListener("submit", (event) => {
  event.preventDefault();

  let password = generatePassword();
  document.querySelector('#password').value = password;
});


//Varaible declarations
const lenSelect = document.getElementById('length');
const capital = document.getElementById('capital');
const lower = document.getElementById('lower');
const nums = document.getElementById('numbers');
const special = document.getElementById('special');
let combinedArr = [];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = [];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"];

//Convert upperLetters array to lower case letters
for(i = 0; i < upperLetters.length; i++) {
  let letter = upperLetters[i].toLowerCase();
  lowerLetters.push(letter);
}

//Generates password based on the user input
function generatePassword() {
  console.log(lenSelect.value);

  if(capital.checked) {
    combinedArr = combinedArr.concat(upperLetters);
  }

  if(lower.checked) {
    combinedArr = combinedArr.concat(lowerLetters);
  }

  if(nums.checked) {
    combinedArr = combinedArr.concat(numbers);
  }

  if(special.checked) {
    combinedArr = combinedArr.concat(specChar);
  }

  let password = '';

  for (i = 0; i < lenSelect.value; i++) {
      password = password + combinedArr[Math.floor(Math.random() * combinedArr.length)];
  };
  return password;
};








