let electronics = document.querySelector(".electronics");
let jevelery = document.querySelector(".jevelery");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let box = document.querySelector(".box");

const BASE_URL = `https://fakestoreapi.com/products`;

async function getAllData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  jeveleryItems(response.data);
}
getAllData("");

function jeveleryItems(arr) {
  box.innerHTML = "";
  arr.forEach((element) => {
    box.innerHTML += `
    <div class="card" style="width: 15rem;">
    <a  href = "./details.html?id=${element.id}"> 
    <img src="${element.image}" class="img" alt="...">
    </a>
    <div class="card-body">
      <p class="card-text">${element.title}</p>
      <span>${element.price}</span>

    </div>
  </div>
  `

  });
}
electronics.addEventListener("click" ,function(){
    getAllData("category/electronics")
})
jevelery.addEventListener("click" ,function(){
    getAllData("category/jewelery")
})
men.addEventListener("click" ,function(){
    getAllData("category/men's clothing")
})
women.addEventListener("click" ,function(){
    getAllData("category/women's clothing")
})






let gobackbtn = document.querySelector(".gobackbtn");
let boxes = document.querySelector(".boxes");

let id = new URL(document.location).searchParams.get("id")

console.log(id)


img.addEventListener("click" ,function(){
  window.location = "details.html";  
})


function jeveleryItems(obj) {
  boxes.innerHTML = "";
    boxes.innerHTML += `
    <div class="card" style="width: 15rem;">
    <img src="${obj.image}" class="img" alt="...">
    <div class="card-body">
      <p class="card-text">${obj.title}</p>
      <span>${obj.price}</span>
    </div>
  </div>
  `

}

async function getData() {
  const response = await axios(`${BASE_URL}/${id}`);
  jeveleryItems(response.data);
}

getData("");

gobackbtn.addEventListener("click" ,function(){
  // window.history.back();  
  window.location = "index.html";  
})