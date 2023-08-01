// function = define code once, and use it many times
//             to perform some code, call the function name

start();

function start(){
    let username = "Aka";
    let age = 20;

    bday_song(username, age);
}

function bday_song(a, b){
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log("happy birthday dear", a);
    console.log("happy birthday to you!");
    console.log("you are", b,  "years old");
}



