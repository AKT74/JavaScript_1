// nested function = function inside other function. 
//                  outer function have access to inner function
//                  inner function are "hidden" from outside the outer function
//                  used in closures (future video topic)

let username = "Aka";
let userinbox = 0;

login();

function login(){
    displayname();
    displayinbox();

    function displayname(){
        console.log(`welcome ${username}`);
    }

    function displayinbox(){
        console.log(`you have ${userinbox} new messages`);
    }
}


