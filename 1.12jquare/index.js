let row = document.querySelector(".row");
let arr = JSON.parse(localStorage.getItem("key")) || [];

$("button").on("click", function (e) {
    e.preventDefault();

  let text = document.createElement("p");
  text.innerText = $("input").val();
  $(".row").append(text);


  $("p").css({
    backgroundColor: "rgb(10, 105, 105)",
    width: "auto",
    padding:"7px",
    height: "30px",
    color:"white",
    borderRadius:"5px",
  });


  $("input").val("");
  text.addEventListener("click", function () {
    this.remove();
  });

  arr.push(text.innerText);
  localStorage.setItem("key", JSON.stringify(arr));
});



function inputARR(element) {
  element.forEach((item) => {

    let letter = document.createElement("p");

    letter.innerText = item;


   $(".row").append(letter);


    $("p").css({
      backgroundColor: "rgb(10, 105, 105)",
      width: "auto",
      padding:"7px",
      height: "30px",
      color:"white",
      borderRadius:"5px",
    });



    letter.addEventListener("click", function () {
        this.remove();
        arr= arr.filter(el=> el!=item);
        localStorage.setItem("key", JSON.stringify(arr));
        
      });


  });
}

inputARR(arr);



