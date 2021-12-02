let element;

element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("card-header");

element=document.getElementsByTagName("li");

element=document.querySelector("#todo-form");
element=document.querySelector(".list-group-item");

element=document.querySelector("li");
element=document.querySelector("div");

element=document.querySelectorAll(".list-group-item")
element.forEach(function(el){
    console.log(el);
});

console.log(element);