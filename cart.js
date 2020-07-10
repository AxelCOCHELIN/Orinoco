//fonction affichant le nombre de produits dans le panier au chargement
function onLoadCartNumber() {
  let productInCart = localStorage.getItem("ProductsInCart");
  if (productInCart) {
    document.querySelector(".cart span").textContent = productInCart;
  }
}

//appelle de la fonction
onLoadCartNumber();
