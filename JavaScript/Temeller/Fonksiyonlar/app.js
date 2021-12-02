// function anne(name="glala glala",age=98){
//     console.log(`İsim: ${name} Yaş: ${age}`)
// }
// anne("Arda",15);
// anne("Cloudy",14);
// anne();
// anne("Kadir");

// function square(x){
//     return x*x;
// }
// function cube(x){
//     return x**3;
// }
// let a = square(12);
// a = cube(a);

// let a =cube(square(12));

// console.log(a);

// function merhaba(){
//     return "Merhaba";
// }
// console.log(merhaba())

// const merhaba=function(name){
//     return `Merhaba ${name}`;
// }
// console.log(merhaba("Arda"))
// (function(name){
//     console.log("Merhaba",name)

// })("Arda");

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi.");
    },
    get:function(){
        console.log("Elde edildi.")
    },
    update:function(id){
        console.log(`Id: ${id} güncellendi.`);
    },      
    delete:function(id){
        console.log(`Id: ${id} silindi.`)
    }
}
console.log(database.host);
database.add();
database.update(10);
database.delete(10);