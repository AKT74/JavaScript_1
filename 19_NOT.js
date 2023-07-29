// ! NOT logical operator
// typically used reverse a condition's boolean value
// true -> false   false -> true

let temp = 15;
let sunny = true;

if(!(temp > 0)){
    console.log("its cold outside");
}
else{
    console.log("its warm outside")
}

if(!sunny){
    console.log("its cloudy outside")
}
else{
    console.log("its sunny outside")
}