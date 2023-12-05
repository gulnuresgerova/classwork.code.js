let box = document.querySelector(".box");
let img = document.createElement("img");

const BASE_URL = ` https://dog.ceo/api/breeds/image/random`;

box.append(img);

setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      img.src = data.message;
    });
}, 1000);
