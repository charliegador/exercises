//20. Skriv en funktion som inte tar något argument och genererar ett random tal mellan 0 och 5
function maths(){
    return Math.floor(Math.random() * 6);
}
let result = maths();
console.log(result);