//  nested loop = a loop inside of another loop


let symbol = window.prompt('enter a symbol to use');
let row = window.prompt("enter # of rows");
let column = window.prompt("enter # of columns");

for(let i = 1; i <= row; i+=1){
    for(let j = 1; j<= column; j+=1){
        document.getElementById("rectangle").innerHTML += symbol;
    }
    document.getElementById("rectangle").innerHTML += "<br>";
}