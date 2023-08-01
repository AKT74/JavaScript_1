// return = return a value back to the place
//          where you invoked a function


let area;
let width;
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");

area = getarea(width, height);

console.log("the area is :", area);

function getarea(width, height){
    // let result = width * height;
    // return result;

    return width * height;

}