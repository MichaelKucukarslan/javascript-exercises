const removeFromArray = function () {
    let originalArray = arguments[0];
    let originalArrayLength = originalArray.length;
    let argumentsLength = arguments.length;
    for (let i = originalArrayLength; i >= 0; i--) {
        for (let j = argumentsLength - 1; j >= 1; j--){
            console.log(originalArray[i] + " " + arguments[j]);
            if (originalArray[i] === arguments[j]){
                originalArray.splice(i, 1);
            }
            console.log("Argument J: " + arguments[j]);
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
