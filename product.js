/**********CREATION DE LA PAGE PRODUIT EN JS *********/

let displayProduct = document.querySelector(".display-product"); // création selecteur du conteneur de la page product en js
let productPrice = localStorage.getItem("price"); //enregistre le prix dans une variable
productPrice = parseInt(productPrice); //transforme le prix en un nombre plutôt qu'un string

/*PROCHAINE ETAPE : créer un tableau avec les données couleurs, 
l'implémenter au html et 
créer des bouton ou lien permettant la personnalisation.*/

let splitColors = localStorage.getItem("colors"); //récupère les couleurs des produits
let color = splitColors.split(","); //divise les couleurs grâce aux virgules
let colors = new Array(); //création d'un tableau

// insertion des couleurs individuelles dans le tableau
for (let i = 0; i < color.length; i++) {
  let newColor = color[i]; // créer un élément pour chaque couleur
  colors.push(newColor); //insère les éléments dans le tableau
}

//création du html de la page produit
displayProduct.innerHTML += `
    <div class='row my-3'>
        <div class="card col-md-6 align-self-center mb-5 mb-lg-0">
            <h4 class="text-center align-self-top">Image</h4>
            <img
            class="card-img"
            src=${localStorage.getItem("image")}
            alt="photo peluche ours"
            />
        </div>
        <div class='col-md-3 text-center align-self-center mb-5 mb-lg-0 font-weight-bold'>
        <h4 class="text-center align-self-top">Nom</h4>
        <h5>${localStorage.getItem("name")}</h5></div>
        <div class='col-md-3 text-center align-self-center mb-5 mb-lg-0 font-weight-bold'>
        <h4 class="text-center align-self-top">Prix</h4>
        <h5>${productPrice / 100},00 €</h5>
        </div>
    </div>
    <div class='row my-3'>
        <div class='col-md-6 text-center align-self-center mb-5 mb-lg-0'>
        <h4 class="text-center align-self-top">Description</h4>
        <h5>${localStorage.getItem("description")}</h5></div>
        <div class='col-md-3 text-center align-self-center mb-5 mb-lg-0 colors'>
            <h4 class="text-center align-self-top">Couleurs au choix</h4>
            <div class="input-group mb-3 text-center w-100">
                <select class="select text-center w-100" id="inputGroupSelect"></select>
            </div>
        </div>
        <div class='col-md-3 text-center align-self-center mb-5 mb-lg-0 d-none'>
        <h4 class="text-center align-self-top">ID Produit</h4>
        <h5>${localStorage.getItem("_id")}</h5>
        </div>
    </div>
    <div class="card-footer text-center bg-white">
        <a href="#" class="btn btn-primary cart-button">Ajouter au panier</a>
    </div>
      `;

// création d'une boucle pour intégrer les éléments de personnalisation
for (let element of color) {
  let newOption = document.createElement("option");
  newOption.setAttribute("value", element);
  newOption.textContent = element;
  let newColorChoice = document.querySelector(".select");
  newColorChoice.appendChild(newOption);
}

//création de l'ajout au panier
let cartButton = document.querySelector(".cart-button");
let chosenColor = document.querySelector("select");

cartButton.addEventListener("click", function () {
  addToCart();
  inCartNumber();
});

//fonction créant un objet contenant toutes les information du produit ajouté au panier
function addToCart() {
  console.log("added to cart");

  class inCartProduct {
    constructor(image, name, description, price, color, iD, inCart) {
      (this.image = image),
        (this.name = name),
        (this.description = description),
        (this.price = price),
        (this.color = color),
        (this.iD = iD),
        (this.inCart = inCart);
    }
  }
  localStorage.setItem("color", chosenColor.value);

  let newInCartProduct = new inCartProduct(
    localStorage.getItem("image"),
    localStorage.getItem("name"),
    localStorage.getItem("description"),
    localStorage.getItem("price"),
    localStorage.getItem("color"),
    localStorage.getItem("_id"),
    0
  );
  newInCartProduct = JSON.stringify(newInCartProduct);
  localStorage.setItem("cartProduct", newInCartProduct);
}

//fonction ajoutant +1 au nombre d'objet dans l'icone panier
function inCartNumber() {
  let productInCart = localStorage.getItem("ProductsInCart");
  productInCart = parseInt(productInCart);
  if (productInCart) {
    localStorage.setItem("ProductsInCart", productInCart + 1);
    document.querySelector(".cart span").textContent = productInCart + 1;
  } else {
    localStorage.setItem("ProductsInCart", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}

//fonction affichant le nombre de produits dans le panier au chargement
function onLoadCartNumber() {
  let productInCart = localStorage.getItem("ProductsInCart");
  if (productInCart) {
    document.querySelector(".cart span").textContent = productInCart;
  }
}

//appelle de la fonction
onLoadCartNumber();

/**
 * LORSQUE je clique sur le bouton ajout au panier
 * je sauvegarde dans le localStorage un objet contenant
 *      l'image, le nom, la description, le prix, la couleur choisi et l'_id du produit
 * j'ajoute 1 au nombre d'élément dans le panier
 * j'affiche dans la page cart.html les objets ajoutés
 *
 */
