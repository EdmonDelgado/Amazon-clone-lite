import {cart} from "../../data/cart.js";

export function renderCheckoutHeader(){
  let cartQuantity = cart.calculateCartQuantity();

  let headerHTML = `
    Checkout (<a class="return-to-home-link js-return-to-home-link"
    href="amazon.html">${cartQuantity} items</a>)
  `
  document.querySelector('.js-checkout-header')
    .innerHTML = headerHTML;
};