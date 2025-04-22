const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const newArr = arr.reduce((total, current) => total + current, 0);
  return newArr;
};

const multiply = function(arr) {
  const newArr = arr.reduce((total, current) => total * current, 1);
  return newArr;
};

const power = function(a, b) {
  let result = 1;
  for(let i = 0; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(n) {
	result = 1;
  for(let i = n; i > 0; i--){
    result *= i;
  }
  return result;
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
