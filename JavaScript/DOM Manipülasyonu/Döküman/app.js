// let value;
// value=document;
// value=document.all;
// value=document.all.length;
// value=document.all[0];
// value=document.all[6];
// value=document.all[document.all.length-1];

// // const elements=document.all;

// // // elements.forEach(function(element){
// // //     console.log(element);
// // // });
// // // console.log(value);

// // const collections = Array.from(document.all);

// // collections.forEach(function(collection){
// //     console.log(collection);
// // });

// value=document.all[8];
// value=document.body;
// value=document.head;
// value=document.location;
// value=document.location.hostname;
// value=document.location.port;
// value=document.URL;
// value=document.characterSet;
// console.log(value);

let value;

value=document;

value=document.scripts[0];

value = document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;



value = document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms["form"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;
value=document.forms[0].getAttribute("name");
value=document.forms[0].method;
console.log(value);