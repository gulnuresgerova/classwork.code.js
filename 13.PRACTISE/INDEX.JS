let inputOne = document.querySelector("#inputOne");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");

addBtn.addEventListener("click", function () {
    if( inputOne.value != ""){
        let liElem = document.createElement("li");
        let spanElem = document.createElement("span");
        let buttonElem = document.createElement("button");
        
        buttonElem.innerText = "Delete";
        buttonElem.className = "btn btn-danger";
        liElem.append(spanElem, buttonElem);
        spanElem.innerText = inputOne.value;
        
        buttonElem.style.padding = "10px";
        buttonElem.style.background = "red";
        buttonElem.style.border = "1px solid white";
        buttonElem.style.color = "white";
      
        spanElem.style.color = "red";
      
        liElem.style.background = "pink";
        liElem.style.display = "flex";
        liElem.style.alignItems = "center";
        liElem.style.justifyContent = "space-between";
        liElem.style.padding = "2px";
        liElem.style.width = "300px";
        liElem.style.marginBottom = "5px";
        
        list.append(liElem);
        buttonElem.addEventListener("click", function () {
          this.parentElement.remove();
        });
    }
    else{
        alert("empty")
    } 
});
