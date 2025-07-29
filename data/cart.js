export let cart = [];

export function addToCart(productId) {
  let matchingItem;

  let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  let quantity = Number(quantitySelector.value);
      
  cart.forEach((cartItem) => {
    if (productId === cartItem.productName) {
      matchingItem = cartItem;
    };
  });

  if(matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  };

  let addedElement = document.querySelector(`.js-added-to-cart-${productId}`);

  addedElement.classList.add('js-added');

  setTimeout(() =>{
    addedElement.classList.remove('js-added');
  }, 2000)
};