//écouteur de click sur les bouton ajouter au panier
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartsNumbers(products[i]);
    totalCost(products[i]);
  });
}

//sauvegarde local des produits ajoutés au panier
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

//fonction d'ajout des produits au panier
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

//fonction du calcul du prix total du panier
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price / 100);
  } else {
    localStorage.setItem("totalCost", product.price / 100);
  }
}
//**********Panier***********//

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".product-container");
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `    
      <div class="product-image col-4 text-center my-3">
        <i class="fas fa-times-circle"></i>
        <img src="./images/${item.name}.jpg" class="col-6">
      </div>
      <div class="product-name col-2 text-center align-self-center my-3">${
        item.name
      }</div>
      <div class="product-price col-2 text-center align-self-center my-3">${
        item.price / 100
      },00 €</div>
      <div class="quantity col-2 text-center align-self-center my-3"><i class="fas fa-arrow-circle-up"></i><span>   </span>${
        item.inCart
      }<span>   </span><i class="fas fa-arrow-circle-down"></i></div>
      <div class="total col-2 text-center align-self-center my-3">${
        item.inCart * (item.price / 100)
      },00 €</div> 
    `;
    });
    productContainer.innerHTML += `
      <div class="col-2 offset-8 text-center align-self-center my-3">
        <h5>TOTAL :</h5>
      </div>
      <div class="col-2 text-center align-self-center my-3">
        <h5>${cartCost},00 €</h5>
      </div>
      `;
  }
}
