const add =document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addKey=document.querySelector("#addkey");
const addValue=document.querySelector("#addvalue");
const deleteKey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems)
function addItem(e){
    sessionStorage.setItem(addKey.value,addValue.value);
}

function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value);
}
function clearItems(e){
    sessionStorage.clear();
}