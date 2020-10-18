//4. Lägg till en input och en knapp. När du trycker på knappen ska innehållet i inputen loggas till konsolen i stora bokstäver
function shout(){
    let texten = document.getElementById("mintext").value;
    console.log(texten.toUpperCase());

}