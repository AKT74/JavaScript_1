// error = object with a description of
//          something went wrong
// 
//          can't open a file
//          lose connection
//          user types incorrect input
//          typeError

// throw = executes a user-defined error

try{
    let x = window.prompt("enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!"
    
    console.log(`${x} is a number`);
}

catch(error){
    console.log(error);
}

finally{
    console.log("this always execute");
}