const glazing = {
  'Keep Original': 0,
  'Sugar Milk': 0,
  'Vanilla': 0.5,
  'Double Chocolate': 1.5,
}

   
const packsize = {
  '1': 1,
  '3': 3,
  '6': 5,
  '12': 10,
}

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

let cart = new Set ();

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
    cart.add(newRoll);
    return newRoll;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
function cartTemplate(roll) {
  let template = document.getElementById("cart-space");
  let templateContent = template.content.cloneNode(true);

  console.log(templateContent)

  // Access and manipulate the DOM
  roll.element = templateContent.querySelector(".cart1");
  
  // Start of remove
  function removeButtonRoll() {
    roll.element.remove(roll);
    cart.delete(roll);
    // Need to include price update with removal of roll 
    updateBunPrice();

    localStorage.setItem("storedCart", JSON.stringify(cart));
  }

  let cartCheckout = document.querySelector(".container")
  // Add to cart
  cartCheckout.append(roll.element);
  cartImage(roll);
  updateBunPrice();

  let removeRoll = roll.element.querySelector("#removeCartItem");
  // On click removal action
  removeRoll.addEventListener("click", removeButtonRoll);
}

// Update total cart price
function updateBunPrice() {
  let cartPrice = document.querySelector(".cart-price");
  let cartPriceVal = 0;
  if (cart.size === 0) {
    cartPrice.innerHTML = "$0.00";
  }
  else {
    // Similar to HW 4 calculations
    for (let roll of cart) {
      cartPriceVal += Number(roll.finalPrice);
      let finalCartPrice = "$" + (cartPriceVal).toFixed(2);
      cartPrice.innerHTML = finalCartPrice;
    }
  }
}
 
// Updates image + text info
function cartImage(roll) {
  let rollPho = roll.element.querySelector(".rollPhoto");
  rollPho.src = "../assets/products/" + rolls[roll.type].imageFile;

  let rollNam = roll.element.querySelector(".rollName");
  rollNam.innerHTML = roll.type + " Cinnamon Roll";

  let rollGT = roll.element.querySelector(".rollGlazeType");
  rollGT.innerHTML = "Glazing: " + roll.glazing;

  let rollSP = roll.element.querySelector(".rollSizingPack");
  rollSP.innerHTML = "Pack Size: " + roll.size;

  let rollPrice = roll.element.querySelector(".rollItemPrice");
  rollPrice.innerHTML = "$" + roll.finalPrice;
}

function getStorage() {
  let saveRoll = JSON.parse(localStorage.getItem("storedCart"));
  console.log(saveRoll);
  
  // Adding it to template above
  for (let theRoll of saveRoll) {
    let moreRolls = cartRolls(theRoll.type, theRoll.glazing, theRoll.size, theRoll.basePrice);
    cartTemplate(moreRolls);
  }
}

const storedCart = localStorage.getItem("storedCart");

// Undefined cases
if (storedCart !== null) {
  getStorage();
}

console.log(localStorage.getItem("storedCart"));