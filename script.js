const today = moment();
console.log(today.format());
document.getElementById("currentDay").innerHTML = today.format('dddd, MMMM DD, YYYY');


var saveBtn = document.querySelector('#btn')
var evntOut = document.querySelector('#evnt');




function renderLastRegistered() {
    var evnt = localStorage.getItem("evnt");

    if (evnt === null) {
        return;
    }
    evntOut.textContent = evnt;
}


saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var evntFinal = document.querySelector("#evnt").value;

    localStorage.setItem("evnt", evntFinal);
    renderLastRegistered();
});

function output() {
    var evntFinal = document.querySelector("#evnt").value;

    localStorage.setItem("evnt", evntFinal);
    renderLastRegistered();
}
