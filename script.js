//DOM elements
var passwordEl = document.getElementById("password")
var generateEl = document.getElementById("generate")

// Strings for getting random letters and numbers
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "~!@#$%^&*()_+=-`"


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

    var passLow = confirm ("Would you like lower case letters in your password?");

    var passNum = confirm ("Would you like numbers in your password?");

    var passSym = confirm ("Would you like special characters in your password?");

    console.log(passUp, passLow, passNum, passSym)

var hasLower = passLow;
    hasUpper = passUp;
    hasNumber = passNum;
    hasSymbol = passSym;

    generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, passLength)

function generatePassword(lower, upper, number, symbol, passLength){


    var newPassword = "";
    var typesCount = lower + upper + number + symbol;

    console.log(typesCount);

     var typesArray = [{lower}, {upper}, {number}, {symbol}].filter (
        item => Object.values(item)[0]    
    );

    console.log("Array = ", typesArray);

    for (var i = 0; i < passLength; i+=typesCount) {
        typesArray.forEach(type => {
            var functionName = Object.keys(type)[0];
            console.log(functionName)
            newPassword += randomFunctions[functionName]();
        });


        
        console.log (password)
    }
}
console.log(password)
//     passwordEL.innertext = generatePassword(hasLength, hasUpper, hasLower, hasNum, hasSym);
// // generate password function
// function generatePassword() {
//     var generatedPassword = ''
//     var typesCount = hasLower + hasUpper + hasNum + hasSym;
//     console.log(typesCount);
// }
// console.log(generatePassword())
});
var randomFunctions = {
    upper: getUpper,
    lower: getLower,
    nums: getNumbers,
    syms: getSymbols
}



