const reverseString = function(string) {
    let newStr = ""
    let newStrLen = string.length - 1;
    for (let i = newStrLen; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
