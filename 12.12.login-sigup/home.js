let wellcome = document.querySelector(".succes");
let userName = localStorage.getItem("userName");
wellcome.innerText = `xos geldiz${userName}`;