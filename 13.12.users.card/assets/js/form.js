const id = new URLSearchParams(window.location.search).get("id");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

let BASE_URL = `//localhost:8080/users`;
if(id){
    
axios(`${BASE_URL}/${id}`).then((res)=>{
    inputs[0].value = res.data.name;
    inputs[1].value = res.data.surname;
    inputs[2].value = res.data.email;

})
}
form.addEventListener("submit" ,function(e){
    e.preventDefault();
    let dateValue = new Date();
    let obj ={
        name:inputs[0].value,
        surname:inputs[1].value,
        email:inputs[2].value,
        date: dateValue.toLocaleString(),
        userPhoto: `./assets/img/${inputs[3].value.split("\\")[2]}`

    }
    // console.log(obj);
console.log(inputs[3].value);

if(id){
    axios.patch(`${BASE_URL}/${id} `,obj)
}else{
    axios.post(`${BASE_URL}`, obj) 
}
window.location = "index.html"
})