const box = document.querySelector(".box");

const BASE_URL = `//localhost:8080/users`;

async function getData() {
    let response = await axios(`${BASE_URL}`);
    movie(response.data);
  }
  getData();

function movie(arr) {
  box.innerHTML = "";
  arr.forEach((element) => {
    box.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=".${element.userphoto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p><button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button></p>
      <a href="#" class="btn btn-primary">Remove</a>
    </div>
  </div>
  `
  box.append(arr);
  });
}

async function deleteSupplier(id, btn) {
    if (confirm("are you  delete ??")) {
      btn.closest("card").remove();
      await axios.delete(`${BASE_URL}/${id}`);
    }
  }