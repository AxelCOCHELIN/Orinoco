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

//créer un bouton pour chaque couleur pour personnalisé les oursons.

//création du html de la page produit
displayProduct.innerHTML += `
    <div class='row mt-5'>
        <div class='col-6 text-center align-self-center'><h4>Image</h4></div>
        <div class='col-3 text-center align-self-center'><h4>Nom</h4></div>
        <div class='col-3 text-center align-self-center'><h4>Prix</h4></div>
    </div>
    <div class='row my-3'>
      <div class="card col-6 align-self-center my-4 mb-lg-0">
            <img
            class="card-img"
            src=${localStorage.getItem("image")}
            alt="photo peluche ours"
            />
        </div>
        <div class='col-3 text-center align-self-center font-weight-bold'>${localStorage.getItem(
          "name"
        )}</div>
        <div class='col-3 text-center align-self-center font-weight-bold'>${
          productPrice / 100
        },00 €</div>
      </div>
      <div class='row mt-5'>
        <div class='col-6 text-center align-self-center'><h4>Description</h4></div>
        <div class='col-4 text-center align-self-center'><h4>Couleurs au choix</h4></div>
        <div class='col-2 text-center align-self-center'><h4>ID Produit</h4></div>
      </div>
      <div class='row my-3'>
        <div class='col-6 text-center align-self-center'>${localStorage.getItem(
          "description"
        )}</div>
        <div class='col-4 text-center align-self-center colors'></div>
        <div class='col-2 text-center align-self-center'>${localStorage.getItem(
          "_id"
        )}</div>
      </div>
      <div class="card-footer text-center bg-white">
        <a href="cart.html" class="btn btn-primary description-link">Ajouter au panier</a>
      </div>
      `;

for (let element of color) {
  let newButton = document.createElement("button");
  newButton.className = "btn btn-light text-center";
  newButton.textContent = element;
  let newColorButton = document.querySelector(".colors");
  newColorButton.appendChild(newButton);
}
