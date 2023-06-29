const fibonacci = function(fibNum) {
    fibNum = parseInt(fibNum, 10);
    let num1 = 0;
    let num2 = 1;
    let cur = num1 + num2;
    if (fibNum < 0){
        return "OOPS";
    }
    if (fibNum == 1 || fibNum ==2){
    return 1;
    }
    for (let i = 3; i <= fibNum; i++){
        num1 = num2;
        num2 = cur;
        cur = num1 + num2;
}
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
