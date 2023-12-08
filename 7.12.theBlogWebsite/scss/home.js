const search= document.querySelector(".search")
const box= document.querySelector(".box")
const pen= document.querySelector(".pen")

const BASE_URL = `http://localhost:8080/blogs`;

async function getAllData(endpoint) {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
    card(response.data);
  }
  getAllData("");
  
  function card(arr) {
   pen.innerHTML = "";
    arr.forEach((element) => {
     pen.innerHTML += `
     
              <h1 class="blog-title">${element.title} </h1>
            <p class="blog-body"> ${element.body}   <a href="./details.html?">Read More</a></p>
            <p class="grey">written by ${element.author}</p>
            
            <div class="buttons">
                <button class="delete" onclick=deleteBtn> delete</button>
                <a href="./newblog.html?id=${element.id}"><button class="edit">Edit</button></a>
            </div>
           
    `
  
    });
  }

  async function deleteBtn(id, btn) {
    if (confirm("you want to delete?")) {
      btn.closest("pen");
      await axios.delete(`${BASE_URL}/${id}`);
    }
  }