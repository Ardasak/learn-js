const name="Arda Engiz Sak";
const department = "Annenin Departmanı";
const salary = "102012091209329023";


// const a = "İsim: " + name + "\nDepartman: " + department + "\nMaaş: " + salary;

// const a = `İsim: ${name} \nDepartman: ${department}\nMaaş: ${salary}`;

// const html = "<ul>" +
//              "<li>"  + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";
function a(){
    return "Merhaba";
}

const html = `<ul>
                <li> ${name} </li>
                <li> ${department}</li>
                <li> ${salary} </li>
                <li> ${10/4} </li>
                <li> ${a()} </li>
            </ul>`;

document.body.innerHTML =html;