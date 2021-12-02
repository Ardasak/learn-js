const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2,c:3});

const mySet2 = new Set([100,3.14,"Mustafa"]);

// console.log(mySet);
// console.log(mySet2);

// console.log(mySet2.size);

// mySet.delete("Mustafa");

// console.log(mySet)

// console.log(mySet.has("Mustafa"));
// console.log(mySet.has(3.14));
// console.log(mySet.has(2000));

// mySet.forEach(function(value){
//     console.log(value);
// });

// for (let value of mySet2){
//     console.log(value);
// }

const array = Array.from(mySet);

console.log(array);