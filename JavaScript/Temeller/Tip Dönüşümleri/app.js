let value;


// String'e Çevirme 

value=String(123);
value=String(3.14);
value=String(true);
value=String(function() {console.log("a")})
value=String([1,2,3,4])
value = (10).toString();
value=(3.14).toString();

// Sayılara Çevirme

value = Number("123");
value=Number(null);
value=Number(undefined);
value=Number("Hello World");
value=Number(function() {console.log("a")});
value = Number([1,2,3,4]);

value = Number("3.14");
value=parseFloat("3.14");

const a = Number("53") + 34;

console.log(a);
console.log(typeof a);

value = parseInt("40")
console.log(value);
console.log(typeof value)