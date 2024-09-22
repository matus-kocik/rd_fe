function transformFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function transformCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(transformFahrenheitToCelsius(50));
console.log(transformCelsiusToFahrenheit(50));