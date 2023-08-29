
// let element = document.getElementById("mytitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");
// // console.log(fruits[1]);

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })

// yang ini ga bisa
// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "lightgreen";

// jadi pake yang ini(bisa) dari chatGPT
// document.addEventListener('DOMContentLoaded', function () {
//     let vegetables = document.getElementsByTagName("li");
//     vegetables[1].style.backgroundColor = "lightgreen";
// });

// gabisa juga
// let desserts = document.getElementsByClassName("dessert");
// desserts[0].style.backgroundColor = "lightgreen";

// haaaa...bisa nya yang ini
// document.addEventListener('DOMContentLoaded', function () {
//     let desserts = document.getElementsByClassName("dessert");
//     desserts[0].style.backgroundColor = "lightgreen";
// });

// tapi ini bisa (# buat id)
let element = document.querySelector("#mytitle");
element.style.backgroundColor = "lightgreen";

// tapi kenapa class(pake .) gabisa kaya yang di atas ya
document.addEventListener('DOMContentLoaded', function () {
let element = document.querySelector(".dessert");
element.style.backgroundColor = "lightgreen";
})

// list juga sama(langsung tulis "li" aja), gabisa. harus kaya gini
// document.addEventListener('DOMContentLoaded', function () {
//     let element = document.querySelector("li");
//     element.style.backgroundColor = "lightgreen";
// })

// ini bisa buat atribut "for" pake []
// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen";

//kenapa siiii harus pake tambahan itu buat list sama class(.), di vidio youtube kaga, perasaan gada yang kelewat
document.addEventListener('DOMContentLoaded', function () {
let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen"; 
})
})

// ini bisa buat atribut "for" gatau atribut yang lain, sama id(#) juga bisa
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen"; 
})