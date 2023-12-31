// promise = object that encapsulates the result of an asynchronous operation
//          let asynchronous methods return values like synchronous methods
//          "I promise to return something in the future"

//          the state is 'pending' then: 'fulfilled or 'rejected
//          the result is what can be returned
//          2 parts producing & consuming

/*
const promise = new Promise((resolve, reject) => {
    let fileloaded = false;

    if(fileloaded){
        resolve("file loaded");
    }
    else{
        reject("file not loaded");
    }


});

promise.then(value => console.log(value))
    .catch(error => console.log(error));
*/

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then( () => console.log("thanks for waiting"));
