//canvas API = a means for drawing graphics 
//              used for animations, games, data visualization

let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

//draw line
/*
context.strokeStyle = "blue"
context.lineWidth = 5;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(100, 100);
context.lineTo(100, 200);
context.moveTo(200, 0);
context.lineTo(100, 200);
context.stroke();
*/

//draw triangle
/*
context.fillStyle = "yellow";
context.strokeStyle = "red"
context.lineWidth = 5;
context.beginPath();
context.moveTo(100, 0);
context.lineTo(0, 100);
context.lineTo(200, 100);
context.lineTo(100, 0);
context.stroke();
context.fill();
*/

//draw rectangle
/*
context.fillStyle = "blue";
context.fillRect(0, 0, 100, 100);
context.strokeStyle = "red"
context.strokeRect(0, 0, 100, 100);

context.fillStyle = "red";
context.fillRect(0, 100, 100, 100);
context.strokeStyle = "blue"
context.strokeRect(0, 100, 100, 100);

context.fillStyle = "green";
context.fillRect(100, 100, 100, 100);
context.strokeStyle = "black"
context.strokeRect(100, 100, 100, 100);

context.fillStyle = "yellow";
context.fillRect(100, 0, 100, 100);
context.strokeStyle = "orange"
context.strokeRect(100, 0, 100, 100);
*/

// draw circle
//(x, y, r, sAngle, eAngle, counterclockwise)
/*
context.fillStyle = "lightblue";
context.strokeStyle = "blue";
context.lineWidth = 5;
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

// draw text
context.font = "20px MV Boli"
context.fillStyle = "blue";
context.textAlign = "center";
context.fillText("YOU WIN !", canvas.width / 2, canvas.height / 2)


