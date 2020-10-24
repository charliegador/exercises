//3. Skapa en funktion `isSameAge` som accepterar två person-objekt som argument och returnerar `true` ifall deras property age är samma annars `false`
function isSameAge(object1, object2){
    if (object1.age == object2.age) {
        return true;
    } else {
        return false;
    }
}
let result = isSameAge({age: 15, length: 178}, {age: 15});
console.log(result);

result = isSameAge({age: 15}, {age:20});
console.log(result);