/* 
3. Arrow Funkce a Implicitní Return:
○ Přepište obě funkce z prvního úkolu (pro konverzi teplot) jako arrow funkce s
implicitním returnem. Odevzdejte na github obě verze.
*/

//Implicitne
const transformFahrenheitToCelsiusArrowImp = (fahrenheit) =>
  ((fahrenheit - 32) * 5) / 9;

//Explicitne
const transformFahrenheitToCelsiusArrowExp = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
}

//Implicitne
const transformCelsiusToFahrenheitArrowImp = (celsius) => (celsius * 9) / 5 + 32;

//Explicitne
const transformCelsiusToFahrenheitArrowExp = (celsius) => {
  return (celsius * 9) / 5 + 32;
}

console.log(transformFahrenheitToCelsiusArrowImp(50));
console.log(transformFahrenheitToCelsiusArrowExp(50));

console.log(transformCelsiusToFahrenheitArrowImp(50));
console.log(transformCelsiusToFahrenheitArrowExp(50));