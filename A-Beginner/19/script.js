//19. Skriv en funktion ``isLong`` som accepterar en string och returnerar `true` ifall den är längre än 18 tecken annars `false`
function isLong(str){
    console.log(str.length);
    if (str.length > 18){
        return true;
    } else {
        return false;
    }
}
let result = isLong("idag gick jag på stan och träffade en kompis");
console.log(result);

result = isLong("kortare än 18");
console.log(result);

result = isLong("en kille är tio år");
console.log(result);

