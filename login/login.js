let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");



form.addEventListener("submit", function (event) {
  event.preventDefault();
let allUsers=JSON.parse(localStorage.getItem("allUser"))
  let bool = allUsers.some(
    (item) =>
      item.userName === allInputs[0].value &&
      item.password ===allInputs[2].value
  )
  //console.log(user);

  if (allInputs[0].value !== "" || allInputs[2].value!== "") {
    if(bool){
      window.location = "main.html"
    }else{
      alert("username or email is wrong")
    }

  } else {
    window.alert("nese duz dol");
  }
});


























// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "username.value" && password == "password.value"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }