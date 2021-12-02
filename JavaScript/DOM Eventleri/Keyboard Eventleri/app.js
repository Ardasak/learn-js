// document.addEventListener("keypress",run);
// document.addEventListener("keydown",run);
// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);
function changeText(e){
    header.textContent=e.target.value;
    console.log(e.target.value);
}