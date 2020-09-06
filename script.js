//DOM elements
var passwordEl = document.getElementById(#password)
var generateEl = document.getElementById(#generate)

// Strings for getting random letters and numbers
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "~!@#$%^&*()_+=-`"

// Prompts and Confirms for password parameters
document.querySelector('#generate').addEventListener('click', function() {
    var passLength = parseInt(prompt("How many characters would you like your password to be?"))
    if (isNaN(passLength)) {
        alert("You must enter a number.")
        return("notValid")
    }
    else if (passLength < 8) {
        alert("Passwords must be at least 8 characters long.")
        return("notValid")
    }
    else if (passLength > 128) {
        alert("Passwords cannot be longer than 128 characters.")
        return("notValid")

    }
    
    var passUp = confirm ("Would you like upper case letters in your password?");
        if (passUp == true) {
            return true
        }
    var passLow = confirm ("Would you like lower case letters in your password?");
        if (passLow == true) {
            return true
        }
    var passNum = confirm ("Would you like numbers in your password?");
        if (passNum == true) {
            return true
        }
    var PassSym = confirm ("Would you like special characters in your password?");
        if (passSym == true) {
            return true
        }
    var hasLength = passLength.value;
    var hasUpper = passUp.value;
    var hasLower = passLow.value;
    var hasNum = passNum.value;
    var hasSym = passSym.value;
    passwordEL.innertext = generatePassword(hasLength, hasUpper, hasLower, hasNum, hasSym)
});

// generate password function



var randomFunctions = {
    upper: getUpper,
    lower: getLower,
    nums: getNumbers,
    syms: getSymbols,
};

// Random genrator functions
function getLower() {
    return lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
}

function getUpper() {
    return upperCase.charAt(Math.floor(Math.random()*upperCase.length));
}

function getNumbers() {
    return numbers.charAt(Math.floor(Math.random()*numbers.length));
}

function getSymbols() {
    return symbols.charAt(Math.floor(Math.random()*symbols.length));
}

console.log (getSymbols(), getUpper(), getLower(), getNumbers())