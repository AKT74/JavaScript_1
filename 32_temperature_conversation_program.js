
document.getElementById("submit").onclick = function(){

    let temp;

    if(document.getElementById("cel").checked){
        temp = document.getElementById("box").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("label").innerHTML = temp + "°C";

    }
    else if(document.getElementById("far").checked){
        temp = document.getElementById("box").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("label").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("label").innerHTML = "select a unit";
    }

}


// temp = tocelsius(temp);
temp = tofahrenheit(temp);
console.log(temp)


function tocelsius(temp){
    return (temp - 32) * (5/9);

}

function tofahrenheit(temp){
    return temp * 9 / 5 + 32;

}
