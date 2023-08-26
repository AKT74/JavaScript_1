// async = makes a function return a promise 
// await = makes a function wait for a promise

/*
async function loadfile(){
    let fileloaded = true;

    if(fileloaded){
        return "file loaded";
    }
    else{
        throw "file not loaded";
    }
}
*/
function loadfile(){
    let fileloaded = true;

    if(fileloaded){
        return Promise.resolve("file loaded");
    }
    else{
        return Promise.reject("file not loaded");
    }
}

loadfile().then(value => console.log(value))
            .catch(error => console.log(error));

