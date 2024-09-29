/*
1. Vytvořte funkci transformFahrenheitToCelsius, která přijímá teplotu ve stupních
Fahrenheit a vrací ekvivalentní teplotu v stupních Celsius.
○ Vytvořte funkci transformCelsiusToFahrenheit, která provádí opačnou
konverzi.
*/

function transformFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function transformCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(transformFahrenheitToCelsius(50));
console.log(transformCelsiusToFahrenheit(50));