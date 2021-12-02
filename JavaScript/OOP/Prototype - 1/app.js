// const object = new Object();
// const object2 = new Object();
// object.name ="Arda";
// console.log(object);

function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log("Bilgiler Gösteriliyor...");
    }
    this.toString=function(){
        console.log("Employee")
    }
}

const emp1 = new Employee("Arda",15);
console.log(emp1);

console.log(emp1.toString());