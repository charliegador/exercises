//5. Lägg till en knapp med texten 0. Varje gång du trycker på knappen ska texten öka med 1. Så det blir 0, 1, 2, 3, 4, 5, 6 ...
let count = 0;
function counter(){
    let x = document.getElementById("knappen").innerHTML;
    count = count + 1;
    document.getElementById("knappen").innerHTML = count;
}