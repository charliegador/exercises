//2. Skriv en funktion som accepterar en array som argument och byter ut sista elementet mot strängen "virus"
function health(arr){
    let lastPlace = arr.length -1;
    console.log(lastPlace);
    arr[lastPlace] = "virus";
    return arr;
}
let result = health(["Antibiotika", " hjälper", " ej", " mot ", "blank"]);
console.log(result);