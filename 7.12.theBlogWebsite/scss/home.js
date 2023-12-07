const search= document.querySelector(".search")
const box= document.querySelector(".box")


const BASE_URL = `http://localhost:8080`;

async function getAllData(endpoint) {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
    card(response.data);
  }
  getAllData("");
  
  function card(arr) {
    box.innerHTML = "";
    arr.forEach((element) => {
      box.innerHTML += `
      <div class="pen">
              <h1 class="blog-title">${element.title} </h1>
            <p class="blog-body"> ${element.body}   <a href="./details.html?">Read More</a></p>
            <p class="grey">written by ${element.author}</p>
            
            <div class="buttons">
                <button class="delete" onclick=deleteBtn>${element.id} delete</button>
                <a href="#"><button class="edit">Edit</button></a>
            </div>
            </div>
    `
  
    });
  }