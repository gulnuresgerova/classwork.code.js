let button = document.querySelector(".addbgcolor");
button.style.cursor="pointer"
button.addEventListener("click", function (params) {
  let parentElement = button.parentElement;
  parentElement.style.height = "100px";
  parentElement.style.width = "200px";
  parentElement.style.background = "aqua";
  parentElement.style.position = "relative";
  this.style.position = "absolute";
  this.style.right = "10px";
  this.style.bottom = "10px";
  console.log(button.parentElement);
});
// <!-- localStorage.getItem("dark=mode") === "true"
// ? localStorage.setItem("dark-mode", false)
// : localStorage.setItem("dark-mode", true);
// }); -->
//task2
// document.body.style.backgroundColor="red"
let colors= ["blue" ,"red" ,"green" ,"yellow", "pink" , "greey" , "black"];
let colorbtn=document.querySelector(".light");
let body = document.querySelector("body");
colorbtn.style.cursor="pointer"
colorbtn.addEventListener("click" , function () {
    document.body.style.backgroundColor= colors[Math.floor(Math.random()*6)];
})
//task3
let cities = document.querySelector(".task3");
let ulElem = document.createElement("ul");
const liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
liArr.forEach((item) => {
  let liElem = document.createElement("li");
  liElem.innerText = item;
  ulElem.append(liElem);
liElem.style.cursor="pointer"
  liElem.addEventListener("click", function () {
    this.remove();
  });
});
cities.append(ulElem);

//task4
let image = document.querySelector(".task4");
let img = document.createElement("img");
img.setAttribute("src" , "https://www.aqueon.com/-/media/project/oneweb/aqueon/us/blog/ways-to-know-your-fish-are-happy/fish-are-happy-and-healthy-1.png" )
