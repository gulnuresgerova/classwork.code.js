console.log(window.document.documentElement);
console.log(window.document.body);
console.log(document.head);
// task2
let change = document.querySelector(".text");

let btn = addEventListener("click", function () {
  change.innerText = "I am Hacker";
  change.style.color = "red";
  change.style.fontSize = "2rem";
});
// task3
let allText = document.querySelectorAll(".text");
console.log(allText);
allText.forEach((element) => {
  console.log(element.innerText);
});
//task4
let str = "developer";
let i = 1;
let interval = setInterval((elem) => {
  if (i <= str.length) {
    str = str.slice(0, i).toLocaleUpperCase()+ str.slice(i);
    i++;
    console.log(str);
  } else {
    clearInterval(interval);
  }
});
//task5
// let color = document.querySelector(".text");

// let body = addEventListener("click", function () {
 
// });
function myFunction() {
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = "green";
  }