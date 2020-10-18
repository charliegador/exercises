//18. Skriv en funktion som kollar ifall två strängar är lika (och returnerar `true` i så fall, annars `false`)
function alike(str1, str2){
    if (str1 == str2){
        return true;
    } else {
        return false;
    }
}
let result = alike("hej", "hej");
console.log(result);

result = alike("hej", "då");
console.log(result);

//Experiment
result = alike("hej", "Hej");
console.log(result);