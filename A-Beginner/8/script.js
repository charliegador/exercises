//8. Skapa ett objekt som representerar dig själv och som innehåller properties `firstName`, `lastName` och `age`
let charlie = {
    height: "178cm", 
    age: 16, 
    lastName: "Gador", 
    fingers: 10, 
    toes:"10", 
    smart: true, 
    notSmart: false,
    movies: ["StarWars", "Pirates", "Harry Potter"]
};
let weight = 60.3;
console.log(charlie);
console.log(charlie.height);
console.log(charlie.age + charlie.fingers);
console.log(charlie.age + charlie.toes);
console.log(charlie.height + charlie.lastName);
console.log(typeof (charlie.height + charlie.lastName));
console.log(charlie.movies[1]);