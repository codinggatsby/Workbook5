let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

function findCartName(cartItem) {
  return cartItem.item;
}
function displayName(cartItemName) {
  console.log(cartItemNames);
}
let cartItemNames = cart.map(findCartName).sort();

cartItemNames.forEach(displayName);
// calculation output

function addCartItem(runningTotal, cartItem) {
  return runningTotal + cartItem.price * cartItem.quantity;
}

const total = cart.reduce(addCartItem, 0);
console.log(total);
