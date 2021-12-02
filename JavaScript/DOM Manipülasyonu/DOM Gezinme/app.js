let value;
const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");
value = todoList;
value=todo;
value=cardrow;

value=todoList.childNodes;
value=todoList.childNodes[0];

value=todoList.children;
value = todoList.children[0];
value=todoList.children[todoList.children.length-1];
value=cardrow.children[2].children[1].textContent="Anne";

value = todoList;
value=todoList.firstElementChild;
value=todoList.lastElementChild;
value=todoList.childElementCount;

value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

value=todo.previousElementSibling;
value=todo.nextElementSibling;

value=todo.previousElementSibling.previousElementSibling;

console.log(value);