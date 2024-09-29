/*
Bonus (+3 body)
● Vytvořte program, který najde všechna prvočísla v rozsahu zadaném uživatelem.
● Pomocí cyklů vypište každé prvočíslo v rozsahu.
● Nápověda: Prvočíslo je přirozené číslo větší než 1, které nemá jiné kladné dělitele než
1 a samo sebe.
*/

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function writeNumberIsPrimeFromTo(startFrom, endTo) {
    console.log(`Prvocisla v rozsahu od ${startFrom} do ${endTo}: `);
    for (let j = startFrom; j <= endTo; j++) {
        if (isPrime(j)) {
            console.log(j)
        }
    }
}

writeNumberIsPrimeFromTo(5, 20)