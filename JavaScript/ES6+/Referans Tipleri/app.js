// let a = "Mustafa";
// let b = "Mustafa";

// if (a === b){
//     console.log("Naber")
// }

// const person1 = {
//     name:"Mustafa",
//     age:25
// }
// const person2 = {
//     name:"Mustafa",
//     age:25
// }

// if(person1.name===person2.name&&person1.age==person2.age){
//     console.log("Naber");
// }

const cities = new Map();
const key = [1,2,3];
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set(key,"Array");

console.log(cities.get(key));