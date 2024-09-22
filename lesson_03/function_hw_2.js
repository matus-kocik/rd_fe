function biggestNumber(...numbers) {
  return Math.max(...numbers);
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const combinedArray = [...array1, ...array2];
const maxNumber = biggestNumber(...combinedArray);
console.log(maxNumber);
