let baskets = document.querySelector(".basket");
let basket = JSON.parse(localStorage.getItem("basket")) || [];


function addToBasket(id) {
  console.log(id);
  localStorage.setItem("", JSON.stringify())
  let product = baskets.find((elem) => elem._id === id);
  let index = basket.findIndex((elem) => elem._id === id);

  if (index > -1) {
    basket[index] = {
      ...basket[index],
      amount: basket[index].amount + 1,
      product,
    };
  } else {
    basket.push({ ...product, amount: 1 });
  }
}


let toogleBtn= document.querySelector(".toggle-btn")