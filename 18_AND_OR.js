// gives us the ability to check more than 1 condition
// && AND (both conditions must be TRUE)
// || OR (either condition can be TRUE)

let temp = 20;
let sunny = true;

// if(temp > 0 && temp < 30){      //must between 1-29
//     console.log("the weather is good")

// }
// else{
//     console.log("the weather is bad")

// }

// if(temp <= 0 || temp >= 30){      //below 0 OR above 30
//     console.log("the weather is bad")

// }
// else{
//     console.log("the weather is good")

// }

if(temp > 0 && temp < 30 && sunny){      //must between 1-29 AND sunny
    console.log("the weather is good")

}
else{
    console.log("the weather is bad")

}