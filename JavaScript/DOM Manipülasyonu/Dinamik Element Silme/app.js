const todoList=document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

// todos[0].remove();

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[1]);

console.log(todos);
console.log(todoList);