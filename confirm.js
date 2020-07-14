//variables pour l'affichage des données
let totalPriceDisplay = document.querySelector(".totalPrice span");
let orderIdDisplay = document.querySelector(".orderId span");
let orderInfo = localStorage.getItem("orderInfos");
orderInfo = JSON.parse(localStorage.orderInfos);
let totalPrice = localStorage.getItem("totalCost");
let orderId = orderInfo.orderId;

//affichage des données
totalPriceDisplay.textContent = totalPrice; //affichage du prix total
orderIdDisplay.textContent = orderId; //affichage de l'id de commande

//reset le panier au click sur les liens
let links = document.querySelectorAll("a");
links.addEventListener("click", function () {
  localStorage.clear();
});
