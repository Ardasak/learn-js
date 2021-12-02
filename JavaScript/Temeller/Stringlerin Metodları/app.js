let value;

const firstName="Arda";
const lastName="Sak";

const langs="Java, Python, HTML, CSS, JavaScript"

value = firstName + " " + lastName

value = "Arda Engiz";
value += " Sak";

value = firstName.length;

value = firstName.concat(" ",lastName," ","Adamdır.");

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1];

value = firstName.indexOf("d");
value = firstName.indexOf("r");

value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1);

value = langs.split(",");

value = langs.replace("Python","C#");

value= langs.includes("Python");
value = langs.includes("asasasass");

console.log(value);