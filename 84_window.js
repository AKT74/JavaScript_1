// window = interface used to talk to the web browser
//          the DOM is a property of the window

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";

// console.log(window.location.hostname);
// console.log(window.location.pathname);


const mybutton = document.querySelector("#mybutton");
// mybutton.addEventListener("click", () => window.open("https://google.com"));
// mybutton.addEventListener("click", () => window.close("https://google.com"));
// mybutton.addEventListener("click", () => window.print());

// window.alert("hello");
// window.confirm("press ok to continue");
let age = window.prompt("enter your age");
if(age < 18){
    window.alert("you must be at least 19 to visit the site");
    window.close();
}


