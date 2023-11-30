let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let allUser = JSON.parse(localStorage.getItem("allUser")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bool = allUser.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  console.log(bool);
  if (!bool) {
    let userObj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
      id: Date.now(),
    };

    allUser.push(userObj);
    localStorage.setItem("allUser", JSON.stringify(allUser));
    window.location = "login.html";
  } else {
    window.alert("already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});

