//DOM elements

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
        return("NOT A NUMBER!")
    }
    else if (passLength < 8) {
        alert("Passwords must be at least 8 characters long.")
        return("Not long enough")
    }
    else if (passLength > 128) {
        alert("Passwords cannot be longer than 128 characters.")
        return("Too long")
    }
    var passUp = confirm ("Would you like upper case letters in your password?");
    var passLow = confirm ("Would you like lower case letters in your password?");
    var passNum = confirm ("Would you like numbers in your password?");
    var PassSym = confirm ("Would you like special characters in your password?");

    
    console.log(passLength)
    console.log(passUp)
    console.log(passLow)
    console.log(passNum)
    console.log(PassSym)
})

var randomFunctions = {
    upper: getUpper,
    lower: getLower,
    nums: getNumbers,
    syms: getSymbols,
}

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