
let wellcome = document.querySelector(".user");
let userName = localStorage.getItem("userName");
wellcome.innerText = `xos geldiz${userName}`;