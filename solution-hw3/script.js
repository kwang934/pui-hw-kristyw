const glazing = [
  {glaze: 'Keep Original',
    price: 0},
  {glaze: 'Sugar Milk',
    price: 0},
  {glaze: 'Vanilla',
    price: 0.5},
  {glaze: 'Double Chocolate',
    price: 1.5}
]

let select_glaze = document.getElementById("glazing");

for (element of glazing) {
  let newoption = document.createElement('option');
  let newdisplaytext = document.createTextNode(element.glaze);
  newoption.appendChild(newdisplaytext);
  newoption.setAttribute('value', element.price);
  select_glaze.appendChild(newoption);
}

const packsize = [
  {size: "1",
    price: 1},
  {size: "3",
    price: 3},
  {size: "6",
    price: 5},
  {size: "12",
    price: 10}
]

let select_pack = document.getElementById("packsize");

for (element of packsize) {
  let newoption2 = document.createElement('option');
  let newdisplaytext2 = document.createTextNode(element.size);
  newoption2.appendChild(newdisplaytext2);
  newoption2.setAttribute('value', element.price);
  select_pack.appendChild(newoption2);
}

let orderPrice = document.querySelector(".details-price");
const basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 1;

let finalPrice = 0;
let changedPrice = 0;

function glazingChange(element) {
  const priceChangeGlaze = Number(element.value);
  changedPrice = Number(basePrice + priceChangeGlaze).toFixed(2);
  finalPrice = "$" + (changedPrice);
  orderPrice.innerHTML = finalPrice;
}

function packChange(element) {
  const priceChangePack = Number(element.value);
  packPrice = Number(changedPrice * priceChangePack).toFixed(2);
  finalPrice = "$" + packPrice;
  orderPrice.innerHTML = finalPrice;
}