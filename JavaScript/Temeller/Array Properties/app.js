let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","JavaScript"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

numbers[2] = 1000;

value = numbers

value = numbers.indexOf(1000);

numbers.push(3);

value = numbers;

numbers.unshift(3);

numbers.pop()

numbers.shift()

numbers.splice(0,3);

numbers.reverse();

value = numbers.sort();

value = numbers.sort(function(x,y){
    return x-y;

});                 

value = numbers.sort(function(x,y){
    return y-x;
});
console.log(value);