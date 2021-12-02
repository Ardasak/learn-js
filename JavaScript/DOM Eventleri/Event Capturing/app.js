// document.querySelector(".container").addEventListener("click",run);
// document.querySelector(".card.row").addEventListener("click",run);
// document.querySelectorAll(".card-body")[1].addEventListener("click",run);
// function run(e){
//     console.log("Div Container")
// }

const cardbody=document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme işlemi");
    }
    if(e.target.id==="filter"){
        console.log("Filtreleme işlemi");
    }
    if (e.target.id==="clear-todos"){
        console.log("Tüm taskları silme işlemi")
    }
    console.log(e.target);
}