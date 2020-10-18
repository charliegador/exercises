//21. Skriv en funktion `isEven` som returnerar `true` om argumentet är jämnt och `false` om argumentet är udda
function isEven(value){
    if (value%2 == 0){
        return true;
    } else {
        return false;
    }
}
let result = isEven(3);
console.log(result);

result = isEven(4);
console.log(result);