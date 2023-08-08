// function expressions = function without  name (anonymous function) 
//                           avoid polluting the global scope with names
//                          write it, then forget about it

sayhello();

function sayhello(){
    console.log("hello")
}

const greeting = function(){
    console.log("hello!");
}

greeting();

let count = 0;

document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("label").innerHTML = count;
    
}

document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("label").innerHTML = count;
    
}



// function increase(){
//     count+=1;
//     document.getElementById("label").innerHTML = count;
// }

// function decrease(){
//     count-=1;
//     document.getElementById("label").innerHTML = count;
// }
