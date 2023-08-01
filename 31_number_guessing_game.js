const answer = Math.floor(Math.random() * 10 + 1);
let guesss = 0; 

document.getElementById("submit").onclick = function(){
    let guess = document.getElementById("guess").value
    guesss+=1;

    if(guess == answer){
        alert(`${answer} is the #. it took you ${guesss} guess`)
    }
    else if(guess < answer){
        alert("too small")
    }
    else{
        alert("too large")
    }

}