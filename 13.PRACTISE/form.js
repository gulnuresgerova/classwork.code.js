let email = document.querySelector("#exampleInputEmail1");
let password = document.querySelector("#exampleInputPassword1");
let form = document.querySelector(".form");
let checkBox = document.querySelector("#exampleCheck1");
let lemen = document.querySelector("#examplename1");
form.addEventListener("submit", function (event) {
  console.log(checkBox);
  event.preventDefault();

  if (email.value !== "" || password.value !== "" || lemen.value !== "") {
    let user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
  } else {
    alert("you file empty");
  }
});