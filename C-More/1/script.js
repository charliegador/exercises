//1. Skriv en funktion som accepterar en array som argument och returnerar sista elementet utan att i övrigt påverka arrayen
function uppgift1(arr){
    let lastPlace = arr.length -1;
    return arr[lastPlace];
}
let result = uppgift1([10,20,30,40,50]);
console.log(result);
result = uppgift1([10,20,30,40,50,60]);
console.log(result);