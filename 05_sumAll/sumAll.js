const sumAll = function() {
    let smallNumber = arguments[0];
    let largeNumber = arguments[1];
    //Tests if both arguments are positive numbers
    if (smallNumber < 0 || largeNumber < 0) {
        return "ERROR";
    }
    // Tests is both arguments are numbers
    if (typeof(smallNumber) != typeof(1) || typeof(largeNumber) != typeof(1)) {
        return "ERROR";
    }
    // Tests if the arguments are in the correct order
    // If they are not they get switched
    if (smallNumber > largeNumber){
        let temp = smallNumber;
        smallNumber = largeNumber;
        largeNumber = temp;
    }
    let sum = 0;
    for(let i = smallNumber; i <= largeNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
