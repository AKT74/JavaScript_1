// the date object is used to work with dates and times

let date = new Date();

// let date = new Date(1000000000000);
// let date = new Date(2023, 3, 1, 2, 3, 4, 5);
// 1 April 2023, 02:03:04..05
// let date = new Date("December 25, 2003 09:25:48");
/*
let year = date.getFullYear();
let dayofmonth = date.getDate();
let dayofweek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let milliseconds = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// date = date.toLocaleString();
document.getElementById("mylabel").innerHTML = formatTime(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
}

function formatTime(date){
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // let ampm = hour >= 12 ? "pm" : "am";
    // hour = (hour % 12) || 12;

    return `${hour}:${minute}:${second}`;

}