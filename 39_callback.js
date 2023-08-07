// callback = a function passed as an argument  
//              to another function

// ensures that a function is not going 
// to run before a task is completed.
// helps us develop asynchronous code.
// (when one function has to wait for another function)
// that helps us avoid errors and potential problems
// Ex. wait for a file to load

// let total = sum(2, 3);
// displaydom(total);

// function sum(x, y){
//     let result = x + y;
//     return result
// }

sum(2, 3, displaydom);

function sum(x, y, callback){
    let result = x + y;
    callback(result);
}


function displayconsole(output){
    console.log(output);
}
function displaydom(output){
    document.getElementById("label").innerHTML = output;
}