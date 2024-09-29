/* 
4. Funkce Vyššího Řádu:
○ Napište funkci vyššího řádu modifyArray, která přijme pole a transformační
funkci jako argumenty. Transformační funkce by měla být aplikována na
každý prvek pole a modifyArray by mělo vracet nové pole s transformovanými
prvky.
*/

const modifyArray = (array, transformFunction) => (array.map(transformFunction));

const numbers = [1, 2, 3, 4];
const doubledNumbers = modifyArray(numbers, number => number * 2);
console.log(doubledNumbers);