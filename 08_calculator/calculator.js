const add = function(...args) {
  let total = 0;
  args.forEach(element => {
    total += element;
  });
  return total;
};

const subtract = function(...args) {
	let total = args[0];
  let length = args.length;
  for (let i = length - 1; i > 0; i--){
    total -= args[i];
  }
  return total;
};

const sum = function(array) {
	let total = 0;
  array.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(...args) {
  let total = 1;
  let length = args.length;
  for (let i = 0; i <  length; i++) {
    total *= args[i];
  }
  return total;
};

const power = function(...args) {
	let total = args[0];
  total = total ** args[1];
  return total;
};

const factorial = function(num) {
	let total = 1;
  if (num == 0){
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
