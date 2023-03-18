const add = function(a, b) {
	return +a + +b
};

const subtract = function(a, b) {
	return +a - +b
};

const sum = function(arr) {
	let sumResult = 0
  for (let i = 0; i < arr.length; i++) sumResult += arr[i]
  return sumResult
};

const multiply = function(arr) {
	let multResult = 1
  for (let i = 0; i < arr.length; i++) multResult *= arr[i]
  return multResult
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	factorialResult = 1
  for (let i = 1; i < a + 1; i++) factorialResult *= i
  return factorialResult
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
