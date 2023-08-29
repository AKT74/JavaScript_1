// add/change HTML element
//.innerHTML (vulnerable to XSS(cross site scripting) attacks)
//.textContent (more secure)

//vulnerable
// const nametag = document.createElement("h1");
// nametag.innerHTML = window.prompt("enter your name");
// document.body.append(nametag);

//contoh XSS (kayanya)
// <script>
// window.prompt('XSS Attack! Enter your username:','');
// </script>


//more secure
// const nametag = document.createElement("h1");
// nametag.textContent = window.prompt("enter your name");
// document.body.append(nametag);

const mylist = document.querySelector("#fruit");
const listitem = document.createElement("li");
listitem.textContent = "mango";
// mylist.append(listitem); //last
// mylist.prepend(listitem); //first
// mylist.insertBefore(listitem, mylist.getElementsByTagName("li")[1]); //become the index 1(after apple, before orange)
