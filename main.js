let carts = document.querySelectorAll(".add-to-cart");

class Bear {
  constructor(colors, _id, name, price, imageUrl, description, inCart) {
    this.colors = colors;
    this._id = _id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.inCart = inCart;
  }
}

let norbert = new Bear(
  ["Tan", "Chocolate", "Black", "White"],
  "5be9c8541c9d440000665243",
  "Norbert",
  2900,
  "http://localhost:3000/images/teddy_1.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  0
);
let arnold = new Bear(
  ["Pale brown", "Dark brown", "White"],
  "5beaa8bf1c9d440000a57d94",
  "Arnold",
  3900,
  "http://localhost:3000/images/teddy_2.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  0
);
let lennyAndCarl = new Bear(
  ["Brown"],
  "5beaaa8f1c9d440000a57d95",
  "Lenny and Carl",
  5900,
  "http://localhost:3000/images/teddy_3.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  0
);
let gustav = new Bear(
  ["Brown", "Blue", "Pink"],
  "5beaabe91c9d440000a57d96",
  "Gustav",
  4500,
  "http://localhost:3000/images/teddy_4.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  0
);
let garfunkel = new Bear(
  ["Beige", "Tan", "Chocolate"],
  "5beaacd41c9d440000a57d97",
  "Garfunkel",
  5500,
  "http://localhost:3000/images/teddy_5.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  0
);

let products = [norbert, arnold, lennyAndCarl, gustav, garfunkel];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartsNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartsNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartsNumbers(product) {
  let productNumbers = localStorage.getItem("cartsNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartsNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartsNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  //console.log("teh price is", product.price / 100);
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price / 100);
  } else {
    localStorage.setItem("totalCost", product.price / 100);
  }
}

onLoadCartNumbers();
