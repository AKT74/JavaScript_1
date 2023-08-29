
const mybutton = document.querySelector("#mybutton");
const myimg = document.querySelector("#myimg");

// if the picture is displayed
/*
mybutton.addEventListener("click", () => {
    if(myimg.style.display == "none"){
        myimg.style.display = "block";
    }
    else{
        myimg.style.display = "none";
    }
});
*/

// if the picture is not displayed
// mybutton.addEventListener("click", () => {
//     console.log(myimg.style.display);
//     if(myimg.style.display == "none"){
//         myimg.style.display = "block";
//     }
//     else{
//         myimg.style.display = "none";
//     }
// });

//if the picture is hidden
mybutton.addEventListener("click", () => {
    console.log(myimg.style.display);
    if(myimg.style.visibility == "hidden"){
        myimg.style.visibility = "visible";
    }
    else{
        myimg.style.visibility = "hidden";
    }
});
