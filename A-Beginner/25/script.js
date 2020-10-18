//25. Skriv en funktion `isLagom` som returnerar `true` ifall argumentet är ett tal som är mellan 8 och 16 och annars returnerar `false`
function isLagom(nmbr) {
    if (nmbr < 16 && nmbr > 8) {
        return true;
    } else {
        return false;
    }
}
let result = isLagom(8);
console.log("testar 12: " + result);

result = isLagom(16);
console.log(result);