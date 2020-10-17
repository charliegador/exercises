//16. Skriv en funktion checkAge som accepterar ett tal age som argument och returnerar strängen "old" om age är större än 65 annars returnerar "young"
function checkAge(old, young){
    let age = 63;
    if (age < 65) {
        return "young";
    }
    else if (age > 65) {
        return "old";
    }
};
let result = checkAge();

console.log(result)