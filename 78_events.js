
//saat button di click 
// const element = document.getElementById("mybutton");
// element.onclick = dosomething; 

//saat page load/refresh
// const element = document.body;
// element.onload = dosomething;

//saat kotak input mengalami perubahan
// const element = document.getElementById("mytext");
// element.onchange = dosomething;

//dihubungkan dengan CSS
const element = document.getElementById("mydiv");
// element.onmouseover = dosomething; //saat hover
// element.onmouseout = dosomethingelse; //saat tidak hover
element.onmousedown = dosomething; //saat di tekan
element.onmouseup = dosomethingelse; //saat tidak di tekan

function dosomething(){
    // alert("you did something");
    element.style.backgroundColor = "blue";
}

function dosomethingelse(){
    element.style.backgroundColor = "lightgreen";
}
