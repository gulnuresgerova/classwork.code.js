let fname = document.querySelector("#firstName");
let form = document.querySelector("#form");
let lname = document.querySelector("#lastName");
let adrs = document.querySelector("#address");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
      let userObj = {
        firstName: fname.value,
        lastName: lname.value,
        address: adrs.value,
        id: Date.now(),
      };
      allUsers.push(userObj);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
      
      window.location = "about.html";  
 fname.value= "";
 lname.value= "";
 adrs.value= "";

});