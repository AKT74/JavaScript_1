// how to accept user input

// EASY way with a window prompt

// let username = window.prompt("whats your name ?")
// console.log(username);

// DIFFICULT way HTML textbox

let username;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "hello " + username;

}