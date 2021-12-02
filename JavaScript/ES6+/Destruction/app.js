// let number1, number2;

// arr = [100,200,300,400];

// number1=arr[0];
// number2 = arr[1];
// const [number1,number2] = arr;

// const [number1,number2] = arr;

// console.log(number1,number2);


// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1,c:number2,e:number3} = numbers;
// console.log(number1,number2,number3);


// const getLangs = () => ["Python","Java","C++"];
// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3)

const person={
    name:"Arda Sak",
    year:2006,
    salary:1323232403289032,
    showInfos : () => console.log("Bilgiler gösteriliyor.")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
console.log(isim,yil,maas);

bilgileriGoster();