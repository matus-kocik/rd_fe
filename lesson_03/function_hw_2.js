/* 
2. Rest Parametry a Spread Operátor:
○ Napište funkci biggestNumber, která používá rest parametry k přijetí
libovolného počtu argumentů a vrací největší z nich.
○ Pomocí spread operátoru spojte dvě pole čísel a použijte funkci
biggestNumber pro zjištění největšího čísla v nově vytvořeném poli.
*/

const biggestNumber = (...numbers) => Math.max(...numbers);

const array1 = [0, 1, 3, 5];
const array2 = [2, 4, 6, 7];
const combinedArray = [...array1, ...array2];
const maxNumber = biggestNumber(...combinedArray);
console.log(maxNumber);
