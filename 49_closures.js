// closure = a function preserved and private data. 
//          give you access to an outer function's scope,
//          from an inner function.

document.getElementById("login").onclick = login();



userinbox = 420.69;

function login(){
    let username = "Aka";
    let userinbox = 1;
    function alertuser(){
       alert(`${username} you have ${userinbox} new messages`);
       userinbox = 0;
    }
    return alertuser;
}
