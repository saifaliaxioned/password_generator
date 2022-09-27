// Password Generator function
var passwordLength = document.querySelector('#password-length');
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var symbols = '!@#$%^&*(){}[]=./,';
var numbers = '0123456789';
var outputEl = document.querySelector('.output');
var copyOutput = document.querySelector('.copy-pass');
var isUpper, isLower, isNumber, isSymbol;

outputEl.innerText = '';
var checkedObject = {
  isUpper: getUppercase,
  isLower: getLowercase,
  isNumber: getNumbers,
  isSymbol: getSymbols
}

var generateBtn = document.querySelector('#generate-password');
generateBtn.addEventListener('click', getPassword)

function getPassword() {
  isUpper = document.querySelector('#uppercase').checked;
  isLower = document.querySelector('#lowercase').checked;
  isNumber = document.querySelector('#numbers').checked;
  isSymbol = document.querySelector('#symbols').checked;
  outputEl.innerText = '';

  if (isUpper || isLower || isNumber || isSymbol) {
    var checkedCount = isUpper + isLower + isNumber + isSymbol;
    var length = passwordLength.value / checkedCount;
    var str = [];
    for (i = 0; i < Math.ceil(length); i++) {
      passwordGenerator(isUpper, 'isUpper');
      passwordGenerator(isLower, 'isLower');
      passwordGenerator(isNumber, 'isNumber');
      passwordGenerator(isSymbol, 'isSymbol');
    }

    function passwordGenerator(generator, key) {
      if (generator) {
        str.push(checkedObject[key]());
      }
    }
    str.splice(passwordLength.value);
    outputEl.innerText = str.join('');
  }
}

copyOutput.addEventListener('click', copyResult);

function copyResult() {
  if (outputEl.innerText !== '') {
    navigator.clipboard.writeText(outputEl.innerText);
    alert('Password copied to clipboard');
  }
}

function getUppercase() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getLowercase() {
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];

}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}


























