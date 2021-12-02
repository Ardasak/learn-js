// console.log(this);

// const emp1 = {
//     name:"Arda Sak",
//     age:15,
//     showInfos:function(){console.log(emp1.name,emp1.age);}
// }

// const emp2 = {
//     name:"Ege Akman",
//     age:3
// }
// emp1.salary=35000;
// emp1.showInfos();
// console.log(emp1);

function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.showInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
    
}

const emp1 = new Employee("Arda", 15, 25000);
const emp2 = new Employee("Ege",3,4000);

emp1.showInfos();

