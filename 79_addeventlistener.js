// .addEventListener (event, function, useCapture) 
// you can add event listener to one element.
// even the same event that invokes different functions

const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");

/*
innerdiv.addEventListener("mouseover", changered);
innerdiv.addEventListener("mouseout", changegreen);

function changered(){
    innerdiv.style.backgroundColor = "red";
}
function changegreen(){
    innerdiv.style.backgroundColor = "lightgreen";
}
*/

innerdiv.addEventListener("click", changeblue);
outerdiv.addEventListener("click", changeblue, true); 
//"true" is for the outerdiv to be hit first 
// when we click on the innerdiv box. if there is not "true"
//the innerdiv will hit first

function changeblue(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor = "lightblue";
}