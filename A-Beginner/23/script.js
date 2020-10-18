//23. Skriv en funktion `isDivisibleByFive` som returnerar `true`/`false` om argumentet är delbart med 5
function isDivisibleByFive(pentagon) {
    if (pentagon%5 === 0) {
        return true;
    } else {
        return false;
    }
}
let result = isDivisibleByFive(50);
console.log(result);

result = isDivisibleByFive(51);
console.log(result)