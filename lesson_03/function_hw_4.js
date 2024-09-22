function modifyArray(array, transformFunction) {
    return array.map(transformFunction);
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = modifyArray(numbers, number => number * 2);
console.log(doubledNumbers);