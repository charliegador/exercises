//17. Skriv en funktion `isTanja` som returnerar `true` ifall argumentet är strängen "Tanja"  och annars `false`
function isTanja(str) {
    if (str === "Tanja"){
        return true;
    } else{
        return false;
    }
}
let result = isTanja("Tanja");
console.log(result);
console.log(isTanja("kalle"));
