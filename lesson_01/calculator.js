const numberOne = 0.3;
const numberTwo = 0;

const add = numberOne + numberTwo;
const substract = numberOne - numberTwo;
const multiply = numberOne * numberTwo;
let divide;
if (numberTwo !== 0) {
    divide = numberOne / numberTwo;
} else {
    divide = "Error - Division by zero";
}

console.log(add);
console.log(substract);
console.log(multiply);
console.log(divide);

console.log(typeof(add));
console.log(typeof(divide));
