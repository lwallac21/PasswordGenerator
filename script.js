var lowerCaseAlph =
    [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];

var upperCaseAlph =
    [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];

var numbersAll = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

function getPass() {
    var length =
        parseInt(
            prompt("How many characters would you like it your password?"));
    if (length < 8) {
        alert("Password must be longer than 12")
    }

    confirm("Do you want any special characters in your password?");
}

