// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// const value=localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// localStorage.clear();

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// // console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("hareket")==null){
//     console.log("Sorguladığınız veri bulunamadı.")
// }
// else{
//     console.log("Sorguladığınız veri bulunuyor")
// }

// const todos = ["Todo 1","Todo 2","Todo 3"];

// const value = localStorage.getItem("todos");
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);
function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));





    e.preventDefault();
}