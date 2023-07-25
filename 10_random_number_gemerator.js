let x;
let y;
let z; 

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById("roll").onclick = function(){

    //Math.random() * 20 = antara 0 sampai 19
    //      pakai + 1 agar dimulai dari 1 (0 + 1 = 1)

    x = Math.floor(Math.random() * 20) + 1;
    y = Math.floor(Math.random() * 20) + 1;
    z = Math.floor(Math.random() * 20) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}