const mybutton = document.getElementById("mybutton");
const myanimation = document.getElementById("mydiv");

mybutton.addEventListener("click", begin);

//move the box to left bottom 100px far
/*
function begin(){
    let timerid = null;
    let x = 0;
    let y = 0;

    timerid = setInterval(frame, 5);

    function frame(){
        if(x >= 100 || y >= 100){
            clearInterval(timerid);
        }
        else{
            x+=1;
            y+=1;
            myanimation.style.left = x + "px";
            myanimation.style.top = y + "px";
        }


    }
}
*/

//rotate the box 360 deg Z
/*
function begin(){
    let timerid = null;
    let degrees = 0;

    timerid = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerid);
        }
        else{
            degrees+=1;
            myanimation.style.transform = "rotateZ("+degrees+"deg)";
        }


    }
}
*/

//scale
function begin(){
    let timerid = null;
    let scalex = 1;
    let scaley = 1;

    timerid = setInterval(frame, 5);

    //scale up
    function frame(){
        if(scalex >= 2 || scaley >= 2){
            clearInterval(timerid);
        }
        else{
            scalex += 0.01;
            scaley += 0.01;
            myanimation.style.transform = "scale("+scalex+", "+scaley+")";
        }


    }
    //scale down/shrink
    // function frame(){
    //     if(scalex <= 0.1 || scaley <= 0.1){
    //         clearInterval(timerid);
    //     }
    //     else{
    //         scalex -= 0.01;
    //         scaley -= 0.01;
    //         myanimation.style.transform = "scale("+scalex+", "+scaley+")";
    //     }


    // }
}

//both of the move and rotate
/*
function begin(){
    let timerid = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerid = setInterval(frame, 5);

    function frame(){
        if(x >= 100 || y >= 100){
            clearInterval(timerid);
        }
        else{
            degrees+=6;
            x+=0.5;
            y+=0.5;
            myanimation.style.left = x + "px"
            myanimation.style.top = y + "px"
            myanimation.style.transform = "rotateZ("+degrees+"deg)";
        }


    }
}
*/