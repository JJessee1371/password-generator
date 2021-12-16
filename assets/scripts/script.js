let resultText = document.querySelector('#password');
const lengthSelect = document.querySelector('#length');
const capital = document.querySelector('#capital');
const lower = document.querySelector('#lower');
const nums = document.querySelector('#numbers');
const special = document.querySelector('#special');
let resultArr = [];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = [];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"];

//Convert upperLetters array to lower case letters
for(i = 0; i < upperLetters.length; i++) {
  let letter = upperLetters[i].toLowerCase();
  lowerLetters.push(letter);
};

//Form submission event listener
document.querySelector('#create-form').addEventListener("submit", (event) => {
  event.preventDefault();
  let password = generatePassword();
  resultText.value = password;
});


//Generates password based on the user input if a length and character type have been selected
function generatePassword() {
  let password = [];
  let count = 0;
  if(!lengthSelect.value || !capital.checked && !lower.checked && !nums.checked && !special.checked) {
    alert('A password length and at least one character type must be selected.');
    return;
  } else if(lengthSelect.value < 8 || lengthSelect.value > 128) {
    alert('The password length must be between 8 and 128 characters.');
    return;
  } else {
    if(capital.checked) {
      resultArr = resultArr.concat(upperLetters);
      password.push(upperLetters[Math.floor(Math.random() * upperLetters.length)]);
      count++;
    };
    if(lower.checked) {
      resultArr = resultArr.concat(lowerLetters);
      password.push(lowerLetters[Math.floor(Math.random() * lowerLetters.length)]);
      count++;
    };
    if(nums.checked) {
      resultArr = resultArr.concat(numbers);
      password.push(numbers[Math.floor(Math.random() * numbers.length)]);
      count++;
    };
    if(special.checked) {
      resultArr = resultArr.concat(specChar);
      password.push(specChar[Math.floor(Math.random() * specChar.length)]);
      count++;
    };
    
    for(i = 0; i < lengthSelect.value - count; i++) {
      password.push(resultArr[Math.floor(Math.random() * resultArr.length)]);
    };

    return password.join('');
  };
};
