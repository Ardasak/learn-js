const filterInput=document.getElementById("filter");
const todoForm = document.getElementById("todo-form");



todoForm.addEventListener("submit",submitform);
function submitform(e){
    console.log("Submit Eventi");

    e.preventDefault();
}
// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });


// filterInput.onfocus = function(){
//     console.log("Hello");
// };