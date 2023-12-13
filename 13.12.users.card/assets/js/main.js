const tBody = document.querySelector("tbody");
let BASE_URL = `//localhost:8080/users`;

async function getData() {
  let response = await axios(`${BASE_URL}`);
  drawTable(response.data);
}
getData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
      <td>${element.id}</td>
      <td><img src="${element.userphoto}" class="image"></td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.date}</td>
      <td><a class="btn btn-success" href="form.html?id=${element.id}">Edit</a></td>
      <td><button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button></td>
      <td><button class="btn btn-info" onclick=addToFav(${element.id},this)>fav</button></td>
      `;

    tBody.append(trElem);
  });
}
async function deleteSupplier(id, btn) {
  if (confirm("are you  delete ??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

// btn-info.addEventListener("click", function () {
//     navigator.clipboard.writeText(text.innerText).then(() => {
//       console.log("copied");
//     });
//   });
let users = JSON.parse(localStorage.getItem("users")) ?? [];

async function addToFav(id){
  let res=await axios(`${BASE_URL}/${id}`);
  let data =res.data;
  let select = users.find((e)=>e.id == id)
if(!users.includes(select)){
  users.push(data);
  localStorage.setItem("users" , JSON.stringify(users));

}else{
  alert("you alredy have this section")
}
}
