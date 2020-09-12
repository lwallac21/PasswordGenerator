//DOM elements                             
var generateEl = document.getElementById("generate");

// Strings for getting random letters and numbers
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "~!@#$%^&*()_+=-`"

//starting values for the function
var passUp = '';
var passLow = '';
var passNum = '';
var passSym = '';
var passLength = "";

// Random Functions for Looping later
var randomFunctions = {
    lower: function () {
        return lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    },
    upper: function () {
        return upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    },
    nums: function () {
        return numbers.charAt(Math.floor(Math.random() * numbers.length));
    },
    syms: function () {
        return symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
}

var newPassword = "";
// Prompts and Confirms for password parameters
generateEl.addEventListener('click', function (event) {
    
    var passLength = parseInt(prompt("How many characters would you like your password to be?"))
    if (isNaN(passLength)) {
        alert("You must enter a number.")
        return ("notValid")
    }
    else if (passLength < 8) {
        alert("Passwords must be at least 8 characters long.")
        return ("notValid")
    }
    else if (passLength > 128) {
        alert("Passwords cannot be longer than 128 characters.")
        return ("notValid")

    }

    var passUp = confirm("Would you like upper case letters in your password?");

    var passLow = confirm("Would you like lower case letters in your password?");

    var passNum = confirm("Would you like numbers in your password?");

    var passSym = confirm("Would you like special characters in your password?");

    generatePassword(passLow, passUp, passNum, passSym, passLength)

    // generate password function
    function generatePassword(lower, upper, nums, syms, passLength) {

        // Get rid of false types from the array used in the loop
        var typesArray = [{ lower }, { upper }, { nums }, { syms }].filter(
            items => Object.values(items)[0]
        );

        // For Loop within for loop with breaks to stop generating at passLength integer
        for (var i = 0; i < passLength; i++) {
            if (newPassword.length >= passLength) {
                break
            }
            for (var j = 0; j < typesArray.length; j++) {

                if (newPassword.length >= passLength) {
                    break
                }
                if (Object.keys(typesArray[j])[0] === "lower") {
                    newPassword += randomFunctions.lower()

                }
                else if (Object.keys(typesArray[j])[0] === "upper") {
                    newPassword += randomFunctions.upper()

                }
                else if (Object.keys(typesArray[j])[0] === "nums") {
                    newPassword += randomFunctions.nums()
                }
                else if (Object.keys(typesArray[j])[0] === "syms") {
                    newPassword += randomFunctions.syms()
                }
            }

        }

    };
// shuffle function on the new password
    var shuffle = newPassword => newPassword.split('').sort(()=>(Math.random()-0.5)).join('');

// write shuffled function to the new
    document.getElementById("password").value = shuffle(newPassword);
});
