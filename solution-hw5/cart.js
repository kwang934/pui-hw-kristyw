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

// HW5 begins
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.finalPrice = ((rollPrice + glazing[rollGlazing]) * packsize[packSize]).toFixed(2);
    }
}

// Four new Roll objects
function cartRolls (rollType, rollGlazing, packSize, rollPrice) {
    let newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(newRoll);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
function cartTemplate(roll) {
  let template = document.getElementById("cart-space");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelection(".cart1");

  function removeButtonRoll() {
    roll.element.remove(roll);
    cart.remove(roll);
    orderPrice();
  }

  let removeRoll = roll.element.querySelector(".removeCartItem");
  removeRoll.addEventListener("click", removeButtonRoll);

  let cartCheckout = document.querySelector(".container")
  cartCheckout.append(roll.element);
  cartImage(roll);
  updateBunPrice();
}

function updateBunPrice() {
  let cartPrice = document.querySelector(".cart-price");
  let cartPriceVal = 0;
  if (cart.size == 0) {
    cartPrice.innerHTML = "$0.00";
  }
  else {
    // Similar to HW 4 calculations
    for (let roll of cart) {
      cartPriceVal += Number(roll.finalPrice);
      let finalCartPrice = "$" + Number((cartPriceVal).toFixed(2));
      console.log("Price:", finalCartPrice);
      cartPrice.innerHTML = finalCartPrice;
    }
  }
}
 
// Updates image and info
function cartImage(roll) {
  const rollPho = roll.element.querySelector(".rollPhoto");
  rollPho.src = "./products/" + rolls[roll.type].imageFile;

  const rollNam = roll.element.querySelector(".rollName");
  rollNam.innerHTML = roll.type + " Cinnamon Roll";

  const rollGT = roll.element.querySelector(".rollGlazeType");
  rollGT.innerHTML = "Glazing: " + roll.glazing;

  const rollSP = roll.element.querySelector(".rollSizingPack");
  rollSP.innerHTML = "Pack Size: " + roll.size;

  const rollPrice = roll.element.querySelector(".rollItemPrice");
  rollPrice.innerHTML = "$" + roll.finalPrice;
}

cartRolls("Original", "Sugar Milk", "1", 2.49);
cartRolls("Walnut", "Vanilla Milk", "12", 39.90);
cartRolls("Raisin", "Sugar Milk", "3", 8.97);
cartRolls("Apple", "Original", "3", 10.47);

for (let theRoll of cart) {
  cartTemplate(theRoll);
}