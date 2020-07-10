//création de la fonction faisant la requête auprès de l'API
let get = function (url) {
  return new Promise(function (resolve, reject) {
    let request = new window.XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(request);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
};

/**********CREATION DE LA PAGE LISTE EN JS *********/
//appelle de la fonction
get("http://localhost:3000/api/teddies/")
  .then(function (response) {
    let teddies = JSON.parse(response); //tranformation des données JSON en JS
    //création de la boucle pour passer en revue chaque objet
    for (let i = 0; i < teddies.length; i++) {
      let productList = document.querySelector(".product-list"); //récupération de la div qui va réceptionné les données
      //création des cartes listant les produits
      productList.innerHTML = `
        <div class="col-12 col-lg-4 teddy-0">
          <div class="card my-4 mb-lg-0 border-dark shadow-lg">
            <img
            class="card-img-top"
            src=${teddies[0].imageUrl}
            alt="photo peluche ours"
            />
            <div class="card-body">
              <h5 class="card-title">${teddies[0].name}</h5>
              <p class="card-text text-right">${teddies[0].price / 100},00 €</p>
              <p class="card-text d-none">${teddies[0].colors}<p>
              <p class="card-text d-none">${teddies[0].description}<p>
              <p class="card-text d-none">${teddies[0]._id}<p>
            </div>
            <div class="card-footer text-center">
              <a href="product.html" class="btn btn-primary description-link stretched-link">Description</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 teddy-1">
          <div class="card my-4 mb-lg-0 border-dark shadow-lg">
            <img
            class="card-img-top"
            src=${teddies[1].imageUrl}
            alt="photo peluche ours"
            />
            <div class="card-body">
              <h5 class="card-title">${teddies[1].name}</h5>
              <p class="card-text text-right">${teddies[1].price / 100},00 €</p>
              <p class="card-text d-none">${teddies[1].colors}<p>
              <p class="card-text d-none">${teddies[1].description}<p>
              <p class="card-text d-none">${teddies[1]._id}<p>
            </div>
            <div class="card-footer text-center">
              <a href="product.html" class="btn btn-primary description-link stretched-link">Description</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 teddy-2">
          <div class="card my-4 mb-lg-0 border-dark shadow-lg">
            <img
            class="card-img-top"
            src=${teddies[2].imageUrl}
            alt="photo peluche ours"
            />
            <div class="card-body">
              <h5 class="card-title">${teddies[2].name}</h5>
              <p class="card-text text-right">${teddies[2].price / 100},00 €</p>
              <p class="card-text d-none">${teddies[2].colors}<p>
              <p class="card-text d-none">${teddies[2].description}<p>
              <p class="card-text d-none">${teddies[2]._id}<p>
            </div>
            <div class="card-footer text-center">
              <a href="product.html" class="btn btn-primary description-link stretched-link">Description</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 teddy-3">
          <div class="card my-4 mb-lg-0 border-dark shadow-lg">
            <img
            class="card-img-top"
            src=${teddies[3].imageUrl}
            alt="photo peluche ours"
            />
            <div class="card-body">
              <h5 class="card-title">${teddies[3].name}</h5>
              <p class="card-text text-right">${teddies[3].price / 100},00 €</p>
              <p class="card-text d-none">${teddies[3].colors}<p>
              <p class="card-text d-none">${teddies[3].description}<p>
              <p class="card-text d-none">${teddies[3]._id}<p>
            </div>
            <div class="card-footer text-center">
              <a href="product.html" class="btn btn-primary description-link stretched-link">Description</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 teddy-4">
          <div class="card my-4 mb-lg-0 border-dark shadow-lg">
            <img
            class="card-img-top"
            src=${teddies[4].imageUrl}
            alt="photo peluche ours"
            />
            <div class="card-body">
              <h5 class="card-title">${teddies[4].name}</h5>
              <p class="card-text text-right">${teddies[4].price / 100},00 €</p>
              <p class="card-text d-none">${teddies[4].colors}<p>
              <p class="card-text d-none">${teddies[4].description}<p>
              <p class="card-text d-none">${teddies[4]._id}<p>
            </div>
            <div class="card-footer text-center">
              <a href="product.html" class="btn btn-primary description-link stretched-link">Description</a>
            </div>
          </div>
        </div>
      `;
    }
    let descriptionLinks = document.querySelectorAll(".description-link"); //Création un sélecteur js des lien de description
    for (let i = 0; i < descriptionLinks.length; i++) {
      let link = descriptionLinks[i]; //création variable de chaque produit
      link.addEventListener("click", function (event) {
        localStorage.setItem("image", teddies[i].imageUrl); //enregistrement local de l'image de l'ours selectionné
        localStorage.setItem("name", teddies[i].name); //enregistrement local du nom de l'ours selectionné
        localStorage.setItem("price", teddies[i].price); //enregistrement local du prix de l'ours selectionné
        localStorage.setItem("colors", teddies[i].colors); //enregistrement local des couleurs de l'ours selectionné
        localStorage.setItem("description", teddies[i].description); //enregistrement local de la description de l'ours selectionné
        localStorage.setItem("_id", teddies[i]._id); //enregistrement local de l'id de l'ours selectionné
      });
    }
  })
  .catch(function (error) {
    console.log(error);
  });

/**********CREATION DE LA PAGE PRODUIT EN JS *********/
let displayProduct = document.querySelector(".display-product"); // création selecteur du conteneur de la page product en js
let productPrice = localStorage.getItem("price"); //enregistre le prix dans une variable
productPrice = parseInt(productPrice); //transforme le prix en un nombre plutôt qu'un string

//création du html de la page produit
displayProduct.innerHTML += `
<div class='row mt-5'>
        <div class='col-6 text-center align-self-center'><h4>Image</h4></div>
        <div class='col-3 text-center align-self-center'><h4>Nom</h4></div>
        <div class='col-3 text-center align-self-center'><h4>Prix</h4></div>
      </div>
      <div class='row my-4'>
        <div class='col-6 text-center align-self-center'>${localStorage.getItem(
          "image"
        )}</div>
        <div class='col-3 text-center align-self-center'>${localStorage.getItem(
          "name"
        )}</div>
        <div class='col-3 text-center align-self-center'>${
          productPrice / 100
        },00 €</div>
      </div>
      <div class='row mt-5'>
        <div class='col-6 text-center align-self-center'><h4>description</h4></div>
        <div class='col-3 text-center align-self-center'><h4>Couleurs au choix</h4></div>
        <div class='col-3 text-center align-self-center'><h4>ID Produit</h4></div>
      </div>
      <div class='row my-4'>
        <div class='col-6 text-center align-self-center'>${localStorage.getItem(
          "description"
        )}</div>
        <div class='col-3 text-center align-self-center'>${localStorage.getItem(
          "colors"
        )}</div>
        <div class='col-3 text-center align-self-center'>${localStorage.getItem(
          "_id"
        )}</div>
      </div>
      <div class="card-footer text-center bg-white">
        <a href="cart.html" class="btn btn-primary description-link">Ajouter au panier</a>
      </div>
      `;
