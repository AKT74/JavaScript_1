// useful string properties and method

let username = "  Aka aja";
let phonenumber = "0813 8657-9382"


// console.log(username.length);
// console.log(username.charAt(1));
// console.log(username.indexOf("k"));
// console.log(username.lastIndexOf("a"));

// username = username.trim();     //menghapus white space depan belakang yang tidak diperlukan
// username = username.toUpperCase();  //ubah ke kapital
// username = username.toLowerCase();  //ubah ke huruf kecil

phonenumber = phonenumber.replaceAll(" ", "");
phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);
