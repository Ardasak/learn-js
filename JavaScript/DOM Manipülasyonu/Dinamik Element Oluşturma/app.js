const newlink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];
newlink.id="#clear-todos";
newlink.className="btn btn-danger";
newlink.href="https://www.google.com.tr";
newlink.target="_blank";



// cardbody.textContent="Selam"

newlink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newlink);


console.log(newlink);