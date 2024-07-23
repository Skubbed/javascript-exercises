//C = 5/9(F-32).
const convertToCelsius = function(temp) {
  return Math.round((((5/9) * (temp -32)).toFixed(1)) * 10) / 10;    
};

//F = (9/5 * C) + 32
const convertToFahrenheit = function(temp) {
  return Math.round((((9/5) * temp) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
