const palindromes = function (letters) {
    // 00583
    let lettersToCheck = letters.toLowerCase().replace(/[^a-z0-9]/g, "");
    return lettersToCheck.split("").reverse().join("") == lettersToCheck;
};

// Do not edit below this line
module.exports = palindromes;
