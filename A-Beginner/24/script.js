//24. Skriv en funktion `isAllCaps`  som accepterar en sträng som argument och returnerar `true` om argumentet bara består av stora bokstäver, annars `false`
function isAllCaps(str) {
    if (str == str.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
let result = isAllCaps("Hej");
console.log(result);

result = isAllCaps("HEJ");
console.log(result);