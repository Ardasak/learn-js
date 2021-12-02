
// let myMap = new Map();

// // console.log(myMap);

// const key1 = "Mustafa";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");

// // console.log(myMap.get(key1));
// // console.log(myMap);
// console.log(myMap.size);

// const cities = new Map();
// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// cities.forEach(function(value,key){
//     console.log(key,value)
// });

// for(let [key,value] of cities){
//     console.log(key,value);
// }

// for(let key of cities.keys()){
//     console.log(key);
// }

// for(let value of cities.values()){
//     console.log(value);
// }

// const arr = [["key1","value1"],["key2","value2"]];
// const lastMap = new Map(arr);
// console.log(lastMap);
const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
console.log(array);