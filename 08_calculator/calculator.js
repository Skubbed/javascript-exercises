const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(i = arr.length-1; i >= 0; i--){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let total = 1;
  for(i = arr.length-1; i >= 0; i--){
    total *= arr[i];
  }
  return total;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	if(num < 1){return 1;}
  let total = 1;
  while(num > 0){
    total *= num;
    num--;
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

const arra = [1,2,3,5,0];
console.log(sum(arra));