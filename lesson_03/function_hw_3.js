const transformFahrenheitToCelsiusArrow = (fahrenheit) =>
  ((fahrenheit - 32) * 5) / 9;

const transformCelsiusToFahrenheitArrow = (celsius) => (celsius * 9) / 5 + 32;

console.log(transformFahrenheitToCelsiusArrow(50));
console.log(transformCelsiusToFahrenheitArrow(50));