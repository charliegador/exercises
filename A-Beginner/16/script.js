//16. Skriv en funktion checkAge som accepterar ett tal age som argument och returnerar strängen "old" om age är större än 65 annars returnerar "young"
function checkAge(age){
    if (age < 65) {
        return "young";
    }
    else if (age > 65) {
        return "old";
    }
};
let result1 = checkAge(70);
let result2 = checkAge(30);

console.log(result1);
console.log(result2);