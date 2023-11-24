let keys = document.querySelectorAll(".key");
let listAll = document.querySelectorAll(".list");
let words = document.querySelector(".words");
let containers = document.querySelector(".container");
window.addEventListener("keydown", function (e) {
  keys.forEach((key) => {
    if (words.innerText.length > 60) {
      words.innerText = "";
    }
  
    keys.forEach((item, i) => {
      console.log(item.innerText == e.key);
      if (item.innerText == e.key) {
        item.style.opacity = "0";
        key.style.backgroundColor = "darkcyan";
        key.style.transform = `scale(1.3)`;
        key.style.transition = `120ms`;
        words.innerText += `${item.innerText}`;
      }
    });
  });
  window.addEventListener("keyup", function (e) {
    keys.forEach((key) => {
      if (e.code=="space") {
       words.innerText +=`\t`
      }

      keys.forEach((item,i) => {
        if (item.innerText == e.key){
            item.style.opacity = "1";
            key.style.backgroundColor = "darkcyan";
            key.style.transform = `scale(1)`;
          
        }
      })
    });
  });
});

