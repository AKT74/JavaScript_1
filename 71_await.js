// async = makes a function return a promise 
// await = makes a function wait for a promise

async function loadfile(){

    const promise = new Promise((resolve, reject) => {
        let fileloaded = true;

    if(fileloaded){
        resolve("file loaded");
    }
    else{
        reject("file not loaded");
    }
    })
    
    try{
        document.getElementById("myh1").innerHTML = await promise;

    }
    catch(error){
        document.getElementById("myh1").innerHTML = error;

    }
}

loadfile();

