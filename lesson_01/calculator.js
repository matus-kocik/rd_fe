/*
Domácí úkol: Vytvoření primitivní kódové kalkulačky
Cílem tohoto úkolu je porozumění základním matematickým operacím v JavaScriptu a také
seznámení s tím, jak JavaScript reaguje na různé nestandardní situace, jako je dělení nulou.
V pracovním repozitáři vytvořte složku lesson-01, ve které budeme pracovat.

Kroky:
1. Vytvoření souboru: Vytvořte nový soubor s názvem calculator.js
2. Definování proměnných: V souboru vytvořte dvě proměnné, například a a b, a přiřaďte
jim libovolné číselné hodnoty.
3. Matematické operace: Pro každou základní matematickou operaci (sčítání, odčítání,
násobení, dělení) napište kód, který vypočte výsledek operace mezi a a b a výsledek
vypíše do konzole.
4. Edge cases: Zkuste změnit hodnotu proměnné b na 0 a zkuste opět všechny operace.
Zvláště se zaměřte na dělení nulou a všimněte si, jak se JavaScript v tomto případě
chová.
*/

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
