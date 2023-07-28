document.getElementById("button").onclick = function(){

    const mycheckbox = document.getElementById("checkbox");
    const visa = document.getElementById("visa");
    const master = document.getElementById("master");
    const paypal = document.getElementById("paypal");


    if(mycheckbox.checked){
        console.log("you are a subscriber")
    }
    else{
        console.log("you are not a subscriber")
    }

    if(visa.checked){
        console.log("you are paying with visa")
    }
    else if(master.checked){
        console.log("you are paying with master")
    }
    else if(paypal.checked){
        console.log("you are paying with paypal")
    }
    else{
        console.log("you must select a payment type!")
    }

}
