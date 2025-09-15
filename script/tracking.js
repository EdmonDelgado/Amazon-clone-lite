import {getOrder} from '../data/orders.js';
import {loadProductsFetch, getProduct} from '../data/products.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

async function loadTrackingPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  const product = getProduct(productId);
  const order = getOrder(orderId);
  console.log(product);
  console.log(order);
  let productQuantity = 0;
  let productDeliveryDate;

  order.products.forEach((productDetails) => {
    if (productDetails.productId === product.id) {
      productQuantity = productDetails.quantity;
      productDeliveryDate = productDetails.estimatedDeliveryTime;
    };
  })

  const deliveryDateString = dayjs(productDeliveryDate).format('dddd, MMMM D');

  const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDeliveryDate);
  let percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 100;

  if(percentProgress < 5) {
    percentProgress = 5;
  } else if (percentProgress > 75 && percentProgress < 99) {
    percentProgress = 75;
  }

  let trackingHTML = `
    <div class="order-tracking">
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        Arriving on ${deliveryDateString}
      </div>

      <div class="product-info">
        ${product.name}
      </div>

      <div class="product-info">
        Quantity: ${productQuantity}
      </div>

      <img class="product-image" src="${product.image}">

      <div class="progress-labels-container">
        <div class="progress-label ${percentProgress < 50 ? 'current-status' : ''}">
          Preparing
        </div>
        <div class="progress-label ${(percentProgress >= 50 && percentProgress < 95) ? 'current-status' : ''}">
          Shipped
        </div>
        <div class="progress-label ${(percentProgress >= 100) ? 'current-status' : ''}">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${percentProgress}%;"></div>
      </div>
    `
  ;

  document.querySelector('.js-main')
    .innerHTML = trackingHTML;

  document.querySelector('.js-search-button')
    .addEventListener('click', () => {
      const search = document.querySelector('.js-search-bar').value;

      window.location.href = `index.html?search=${search}`;
  });   

  document.querySelector('.js-search-bar')
    .addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        const search = event.target.value;
        window.location.href = `index.html?search=${search}`;
      }
  });
};

loadTrackingPage()