//Skapa en funktion som heter 'isFamily' som tar ett argument och svarar true om argumentet är "Robin" eller "Charlie", annars false.
function isFamily(name) {
    if (name == "Charlie" || name == "Robin") {
        return true;
    } else {
        return false;
    }
}

let result = isFamily("Robin");
console.log(result);

result = isFamily("Charlie");
console.log(result);

result = isFamily("Simon");
console.log(result);