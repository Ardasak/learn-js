let value;
const programmer = {
    name : "Arda Sak",
    age : 14,
    email : "ardasak434@gmail.com",
    langs : ["Python","Java","JavaScript"],
    address : {
        city : "Antalya",
        street : "Konyaaltı"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
};

value = programmer;

value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    {name: "Arda Sak", age: 25},
    {name: "Yusuf Kayra Köse", age:24},
    {name: "Ege Akman", age: 3}
]

value = programmers[0].name;

console.log(value);