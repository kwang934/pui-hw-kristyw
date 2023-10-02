// Taken from script.js
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
  
  let packPrice = 1;
  let finalPrice = 0;
  let changedPrice = 0;
  
  function glazingChange(element) {
    const priceChangeGlaze = Number(element.value);
    // Updated basePrice
    changedPrice = Number(rolls["basePrice"] + priceChangeGlaze).toFixed(2);
    finalPrice = "$" + (changedPrice);
    orderPrice.innerHTML = finalPrice;
  }
  
  function packChange(element) {
    const priceChangePack = Number(element.value);
    packPrice = Number(changedPrice * priceChangePack).toFixed(2);
    finalPrice = "$" + packPrice;
    orderPrice.innerHTML = finalPrice;
  }

// Taken from rollsData.js
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// START OF HW4
const cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const rollBase = rolls[rollType].basePrice

// Getting current info from dictionary
let currentRoll = rolls[rollType];

// Update image, name, and price
document.getElementById('rollHeading').textContent = rollType + " Cinnamon Roll";
document.getElementById('rollImage').src = '../../assets/products/' + currentRoll["imageFile"];
document.getElementById('detailsCart').textContent = "$" + currentRoll["basePrice"];

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
}}

function addToCheckout() {
  // https://www.geeksforgeeks.org/html-dom-select-selectedindex-property/
  let glazeValue = select_glaze.selectedIndex;
  let glazeOption = glazing[glazeValue];

  let packSizeValue = select_pack.selectedIndex;
  let packSizeOption = packsize[packSizeValue];

  let myRoll = newRoll(rollType, glazeOption.glaze, packSizeOption.size, rollBase);
  cart.push(myRoll);
  console.log(cart);
}

// Update cart when clicked on button
document.querySelector("#addCart").addEventListener("click", addToCheckout)