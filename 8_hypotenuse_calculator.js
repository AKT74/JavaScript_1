let a;
let b;
let c;

// a = window.prompt("enter side a");
// a = Number(a);

// b = window.prompt("enter side b");
// b = Number(b);



// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

console.log("side c:", c)

document.getElementById("submitbutton").onclick = function(){

a = document.getElementById("atextbox").value;
a = Number(a);

b = document.getElementById("btextbox").value;
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

document.getElementById("clabel").innerHTML = "Side C: " + c;

console.log("side c:", c)

}