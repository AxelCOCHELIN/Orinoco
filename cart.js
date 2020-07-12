function onLoadCartNumber() {
  let productInCart = localStorage.getItem("ProductsInCart");
  if (productInCart) {
    document.querySelector(".cart span").textContent = productInCart;
  }
}

//appelle de la fonction
onLoadCartNumber();

//variables générales
productsInCart = localStorage.getItem("productsToBuy");
productsInCart = JSON.parse(productsInCart);
let productsContainer = document.querySelector(".products-container");
let headlines = document.querySelector(".headlines");

//affichage des produits
if (productsInCart == null) {
  productsContainer.innerHTML = `
  <h4 class="font-italic col-12 text-center">Votre panier est vide</h4> 
  `;
} else {
  headlines.innerHTML = `
    <div class="col-md-4 d-none d-md-block text-center font-weight-bold">Image</div>
    <div class="col-md-2 d-none d-md-block text-center font-weight-bold">
          Produit
    </div>
    <div class="col-md-2 d-none d-md-block text-center font-weight-bold">Prix</div>
    <div class="col-md-4 d-none d-md-block text-center font-weight-bold">
          Couleur et description
    </div>
  `;
  productsInCart.forEach((product) => {
    let productsDisplay = document.createElement("div");
    productsDisplay.classList.add("product-added");
    productsContainer.appendChild(productsDisplay);
    let productDisplay = document.querySelector(".product-added");
    productDisplay.innerHTML += `
    <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4 text-center align-self-center">
        <img src="${product.image}" class="card-img" alt="">
      </div>
      <div class="col-md-2 text-center align-self-center"><h5>${
        product.name
      }</h5></div>
      <div class="col-md-2 text-center align-self-center"><h5>${
        product.price / 100
      },00 €</h5></div>
      <div class="col-md-4 text-center align-self-center"><h5>${
        product.color
      }</h5><p>${product.description}</p></div>
    </div>
    </div>
  `;
  });
  let totalCost = localStorage.getItem("totalCost");
  totalCost = parseInt(totalCost);
  let productsTotalCost = document.createElement("div");
  productsTotalCost.classList.add("totalCost", "col-12");
  productsContainer.appendChild(productsTotalCost);
  productsTotalCost = document.querySelector(".totalCost");
  productsTotalCost.innerHTML += `
      <div class="col-md-4 offset-md-4 text-center align-self-center my-3">
        <h5>TOTAL : ${totalCost},00 €</h5>
      </div>
        
      </div>
  `;
}

/**
 * CREER un js post de la commande
 */

//fonction affichant le nombre de produits dans le panier au chargement
