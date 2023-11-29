let toggle = document.querySelector(".toggle");

localStorage.getItem("dark-mode") === "true" &&
  document.body.classList.add("dark-mode");
 toggle.addEventListener("click" , function(){
    document.body.classList.toggle("dark-mode");
    localStorage.getItem("dark-mode") 
 });

//   localStorage.getItem("light-mode") === "false" &&
//   document.body.classList.add("light-mode");
//   toggle.addEventListener("click" , function(){
//     document.body.classList.toggle("light-mode");
//     localStorage.getItem("light-mode") 
//  });


localStorage.getItem("dark-mode") === "true"
? localStorage.setItem("dark-mode", false)
: localStorage.setItem("dark-mode", true);

