//22. Skriv funktionen `isOdd`
function isOdd(value) {
    if (value%2 === 0) {
        return false;
    } else {
        return true;
    }
}
let result = isOdd(2);
console.log(result);

result = isOdd(5);
console.log(result);