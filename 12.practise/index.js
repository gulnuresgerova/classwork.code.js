let result = document.querySelector(".result");
let startbtn = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let invalue = document.querySelector(".invalue");
let devalue = document.querySelector(".devalue ");
let resert = document.querySelector(".resert");
let ininput = document.querySelector(".ininput ");
let deinput = document.querySelector(".deinput");
///////////////////////////////////////////////////////////////////
startbtn.style.color = "white";
startbtn.style.backgroundColor = "green";
startbtn.style.width = "100px";
startbtn.style.height = "30px";
startbtn.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
stopbtn.style.color = "white";
stopbtn.style.backgroundColor = "red";
stopbtn.style.width = "100px";
stopbtn.style.height = "30px";
stopbtn.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
increment.style.color = "white";
increment.style.backgroundColor = "teal";
increment.style.width = "200px";
increment.style.height = "30px";
increment.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
decrement.style.color = "white";
decrement.style.backgroundColor = "teal";
decrement.style.width = "200px";
decrement.style.height = "30px";
decrement.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
resert.style.color = "black";
resert.style.backgroundColor = "red";
resert.style.width = "150px";
resert.style.height = "30px";
resert.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
invalue.style.color = "black";
invalue.style.backgroundColor = "yellow";
invalue.style.width = "300px";
invalue.style.height = "20px";
invalue.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
devalue.style.color = "black";
devalue.style.backgroundColor = "yellow";
devalue.style.width = "300px";
devalue.style.height = "20px";
devalue.style.border = "1px solid black";
///////////////////////////////////////////////////////////////////
console.log(result);
///////////////////////////////////////////////////////////////////
let count = 0;
let countInterval;
startbtn.addEventListener("click", function () {
  clearInterval(countInterval);
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 500);
});
///////////////////////////////////////////////////////////////////
stopbtn.addEventListener("click", function () {
  clearInterval(countInterval);
});
///////////////////////////////////////////////////////////////////
resert.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
});
///////////////////////////////////////////////////////////////////
increment.addEventListener("click", function () {
  result.innerText = ++count;
});
///////////////////////////////////////////////////////////////////
decrement.addEventListener("click", function () {
  result.innerText = --count;
});
////////////////////////////////////////////////////////////////////
invalue.addEventListener("click", function () {
  count += +ininput.value;
  result.innerText = count;
});
///////////////////////////////////////////////////////////////////
devalue.addEventListener("click", function () {
  count -= +deinput.value;
  result.innerText = count;
});
///////////////////////////////////////////////////////////////////
