// setTimeout() = invokes after a number of milliseconds
//                  asynchronous functiom (doesn't pause execution)

let item = "crypto";
let price = 420.69;


let timer1 = setTimeout(first, 3000, item, price);
let timer2 = setTimeout(second, 6000);
let timer3 = setTimeout(third, 9000);

function first(item, price){
    alert(`buy this ${item} course for ${price}`);
}
function second(){
    alert(`this is no a scam`);
}
function third(){
    alert(`do it!`);
}

document.getElementById("button").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying`)
}